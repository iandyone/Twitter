import { IUser } from '@appTypes';
import { AppRoutes } from '@appTypes/enums';
import twitterIcon from '@assets/icons/twitter.svg';
import { InputAuth } from '@components/InputAuth';
import { useDispatchTyped } from '@hooks/redux';
import { setUser } from '@store/reducers/user';
import { AppContainer, PageWrapper } from '@styles';
import { getEmailValidation, getPasswordValidation } from '@utils/helpers/validators';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ChangeEvent, FC, FormEvent, useEffect, useMemo, useRef, useState } from 'react';
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
    const {
      title,
      button,
      link,
      emailErrorMessage,
      passwordErrorMessage,
      emailPlaceholder,
      passwordPlaceholder,
    } = data;
    return {
      title,
      button,
      link,
      emailErrorMessage,
      passwordErrorMessage,
      emailPlaceholder,
      passwordPlaceholder,
    };
  }

  function handlerOnChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    setEmailError(null);
  }

  function handlerOnChangePassword(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(null);
  }

  function handlerOnBlurEmail() {
    const isEmailValid = getEmailValidation(email);
    setEmailError(email && !isEmailValid ? emailErrorMessage : null);
  }

  function handlerOnBlurPassword() {
    const isPasswordValid = getPasswordValidation(password);
    setPasswordError(password && !isPasswordValid ? passwordErrorMessage : null);
  }

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
          const user: IUser = userCredential.user;
          const { uid, email, accessToken } = user;
          dispatch(setUser({ uid, email, accessToken }));
          navigate(AppRoutes.FEED);
        })
        .catch((error: Error) => {
          setEmailError(error.message);
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
