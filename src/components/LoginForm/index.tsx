import { IUser } from '@appTypes';
import twitterIcon from '@assets/icons/twitter.svg';
import { InputAuth } from '@components/InputAuth';
import { AppRoutes } from '@constants/variables';
import { useDispatchTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { setUser } from '@store/reducers/user';
import { AppContainer, PageWrapper } from '@styles';
import { getEmailValidation, getPasswordValidation } from '@utils/helpers/validators';
import { ChangeEvent, FC, FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { data } from './config';
import { Body, Button, Form, Link, Title, TwitterIcon } from './styled';

export const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string>(null);
  const [passwordError, setPasswordError] = useState<string>(null);
  const dispatch = useDispatchTyped();
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  const {
    title,
    button,
    link,
    emailErrorMessage,
    passwordErrorMessage,
    emailPlaceholder,
    passwordPlaceholder,
    accountErrorMessage,
  } = useMemo(getTextContent, []);

  useEffect(() => {
    if (emailRef) emailRef.current.disabled = false;
    if (passwordRef) passwordRef.current.disabled = false;
    if (buttonRef) buttonRef.current.disabled = false;
  }, [emailRef, passwordRef, buttonRef]);

  function getTextContent() {
    return { ...data };
  }

  const handlerOnChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(null);
  }, []);

  const handlerOnChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(null);
  }, []);

  const handlerOnBlurEmail = useCallback(() => {
    const isEmailValid = getEmailValidation(email);
    setEmailError(email && !isEmailValid ? emailErrorMessage : null);
  }, [email, emailErrorMessage]);

  const handlerOnBlurPassword = useCallback(() => {
    const isPasswordValid = getPasswordValidation(password);
    setPasswordError(password && !isPasswordValid ? passwordErrorMessage : null);
  }, [password, passwordErrorMessage]);

  function setInputsDisabled(status: boolean = true) {
    emailRef.current.disabled = status;
    passwordRef.current.disabled = status;
    buttonRef.current.disabled = status;
  }

  async function handlerOnSubmit(e: FormEvent) {
    e.preventDefault();
    const isEmailValid = getEmailValidation(email);
    const isPasswordValid = getPasswordValidation(password);
    const isAccountExist = await firebaseDB.getIsUserAlredyExist(email);
    const isValidData = isEmailValid && isPasswordValid && isAccountExist;

    if (!isEmailValid) {
      setEmailError(emailErrorMessage);
    }

    if (!isPasswordValid) {
      setPasswordError(passwordErrorMessage);
    }

    if (!isAccountExist) {
      setEmailError(accountErrorMessage);
      return;
    }

    if (isValidData) {
      try {
        setInputsDisabled();
        const { uid } = await firebaseDB.getSignInWithEmailAndPassword(email, password);
        const { user } = await firebaseDB.getUserData(uid);

        dispatch(setUser(user as IUser));
        navigate(AppRoutes.page.FEED);
      } catch (error) {
        setPasswordError(passwordErrorMessage);
        setInputsDisabled(false);
      }
    }
  }

  return (
    <PageWrapper>
      <AppContainer>
        <Body>
          <TwitterIcon src={twitterIcon} />
          <Title>{title}</Title>
          <Form onSubmit={handlerOnSubmit}>
            <InputAuth
              type='text'
              value={email}
              placeholder={emailPlaceholder}
              onChange={handlerOnChangeEmail}
              onBlur={handlerOnBlurEmail}
              $error={Boolean(emailError)}
              $isNotEmpty={Boolean(email)}
              required={true}
              label={emailError}
              ref={emailRef}
            />
            <InputAuth
              type='password'
              value={password}
              placeholder={passwordPlaceholder}
              onChange={handlerOnChangePassword}
              onBlur={handlerOnBlurPassword}
              $error={Boolean(passwordError)}
              $isNotEmpty={Boolean(password)}
              required={true}
              label={passwordError}
              ref={passwordRef}
            />
            <Button ref={buttonRef}>{button}</Button>
          </Form>
          <Link to={AppRoutes.REGISTRATION}>{link}</Link>
        </Body>
      </AppContainer>
    </PageWrapper>
  );
};
