import { IUser } from '@appTypes';
import twitterIcon from '@assets/icons/twitter.svg';
import { InputAuth } from '@components/InputAuth';
import { AppRoutes } from '@constants/variables';
import { useDispatchTyped } from '@hooks/redux';
import { setUser } from '@store/reducers/user';
import { AppContainer, PageWrapper } from '@styles';
import { getEmailValidation, getPasswordValidation } from '@utils/helpers/validators';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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

  function handlerOnSubmit(e: FormEvent) {
    const isEmailValid = getEmailValidation(email);
    const isPasswordValid = getPasswordValidation(password);

    if (!isEmailValid) {
      setEmailError(emailErrorMessage);
    }

    if (!isPasswordValid) {
      setPasswordError(passwordErrorMessage);
    }

    if (isEmailValid && isPasswordValid) {
      setInputsDisabled();
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { uid, email }: IUser = userCredential.user;
          dispatch(setUser({ uid, email }));
          navigate(AppRoutes.page.FEED);
        })
        .catch((error: Error) => {
          setPasswordError(error.message);
          setInputsDisabled(false);
        });
    }

    e.preventDefault();
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
