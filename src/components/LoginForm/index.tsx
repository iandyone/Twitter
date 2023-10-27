import { IUser } from '@appTypes';
import twitterIcon from '@assets/icons/twitter.svg';
import { AppRoutes } from '@constants';
import { useDispatchTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { setUser } from '@store/reducers/user';
import { AppContainer, PageWrapper } from '@styles';
import { getEmailValidation, getPasswordValidation } from '@utils/helpers/validators';
import { FC, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { data } from './config';
import { Body, Button, Form, Input, InputContainer, Label, Link, Title, TwitterIcon } from './styled';
import { ILoginForm } from './types';

const { REGISTRATION, page } = AppRoutes;
const { FEED } = page;
const {
  title,
  button,
  link,
  emailErrorMessage,
  passwordErrorMessage,
  emailPlaceholder,
  passwordPlaceholder,
  accountErrorMessage,
  noEmailMessage,
  noPasswordMessage,
  invalidPasswordMessage,
} = data;

export const LoginForm: FC = () => {
  const [isEmailError, setIsEmailError] = useState('');
  const [isPasswordError, setIsPasswortError] = useState('');
  const {
    register,
    handleSubmit,
    resetField,
    getValues,
    formState: { errors },
  } = useForm<ILoginForm>();
  const { email: emailError, password: passwordError } = errors;
  const { email, password } = getValues();

  const dispatch = useDispatchTyped();
  const navigate = useNavigate();

  async function handlerOnSubmit({ email, password }: ILoginForm) {
    try {
      setIsEmailError('');
      setIsPasswortError('');
      const { uid } = await firebaseDB.getSignInWithEmailAndPassword(email, password);
      const { user } = await firebaseDB.getUserData(uid);

      if (!uid) {
        setIsEmailError(accountErrorMessage);
        return;
      }

      dispatch(setUser(user as IUser));
      setIsPasswortError('');
      navigate(FEED);
    } catch (error) {
      resetField('password');
      setIsEmailError('');
      setIsPasswortError(invalidPasswordMessage);
    }
  }

  async function validateEmail(email: string) {
    const isAccountExist = await firebaseDB.getIsUserAlredyExist(email);

    if (!isAccountExist) {
      setIsEmailError(accountErrorMessage);
      return false;
    }
    return getEmailValidation(email);
  }

  async function handlerOnInvalid(errors: FieldErrors<ILoginForm>) {
    const { email: emailError, password: passwordError } = errors;
    if (!email) {
      setIsEmailError(emailErrorMessage);
      return false;
    }

    const isAccountExist = await firebaseDB.getIsUserAlredyExist(email);
    if (!isAccountExist) {
      setIsEmailError(accountErrorMessage);
      return false;
    }

    if (emailError) {
      const errorMessage = email?.length ? emailErrorMessage : noEmailMessage;
      setIsEmailError(errorMessage);
    } else {
      setIsEmailError('');
    }

    if (passwordError) {
      const errorMessage = password?.length ? passwordErrorMessage : noPasswordMessage;
      setIsPasswortError(errorMessage);
    } else {
      setIsPasswortError('');
    }
  }

  return (
    <PageWrapper>
      <AppContainer>
        <Body>
          <TwitterIcon src={twitterIcon} />
          <Title>{title}</Title>
          <Form onSubmit={handleSubmit(handlerOnSubmit, handlerOnInvalid)}>
            <InputContainer>
              <Label>{isEmailError}</Label>
              <Input
                type='email'
                placeholder={emailPlaceholder}
                $error={Boolean(emailError)}
                data-testid='login-form-email'
                {...register('email', { required: true, validate: validateEmail })}
              />
            </InputContainer>
            <InputContainer>
              <Label>{isPasswordError}</Label>
              <Input
                type='password'
                placeholder={passwordPlaceholder}
                $error={Boolean(passwordError)}
                data-testid='login-form-password'
                {...register('password', { required: true, validate: getPasswordValidation })}
              />
            </InputContainer>
            <Button data-testid='login-form-submit'>{button}</Button>
          </Form>
          <Link to={REGISTRATION}>{link}</Link>
        </Body>
      </AppContainer>
    </PageWrapper>
  );
};
