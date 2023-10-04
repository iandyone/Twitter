import { AppRoutes, Months } from '@appTypes/enums';
import twitterIcon from '@assets/icons/twitter.svg';
import { InputAuth } from '@components/InputAuth';
import { SelectComponent } from '@components/Select';
import { AppContainer, PageWrapper } from '@styles';
import { getDaysAmountInAMonth } from '@utils/helpers/date';
import { getEmailValidation, getPasswordValidation, getPhoneValidation } from '@utils/helpers/validators';
import { ChangeEvent, FC, FormEvent, useEffect, useMemo, useReducer, useRef } from 'react';

import { data } from './config';
import { Body, Button, Container, Form, Link, Subtitle, Text, Title, TwitterIcon } from './styled';
import { Action, ActionsTypes, IReducerState } from './types';

export const SignUpPage: FC = () => {
  const {
    title,
    subtitle,
    link,
    button,
    description,
    emailPlaceholder,
    phonePlaceholder,
    passwordPlaceholder,
    emailErrorMessage,
    phoneErrorMessage,
    passwordErrorMessage,
  } = useMemo(getTextContent, []);

  const initialState: IReducerState = useMemo(getInitialState, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { day, month, year, email, emailError, password, passwordError, phone, phoneError } = state;
  const { daysList, monthList, yearList } = useMemo(getSelectLists, [month]);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (emailRef) emailRef.current.disabled = false;
    if (passwordRef) passwordRef.current.disabled = false;
    if (buttonRef) buttonRef.current.disabled = false;
    if (phoneRef) phoneRef.current.disabled = false;
  }, [emailRef, passwordRef, buttonRef, phoneRef]);

  function getSelectLists() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const daysList = [];
    const yearList = [];
    const monthList = Object.keys(Months).filter((month) => month.length > 2);

    const daysInAMonth = getDaysAmountInAMonth(new Date(currentYear, Months[month as keyof typeof Months]));

    for (let day = 1; day <= daysInAMonth; ++day) {
      daysList.push(String(day));
    }

    for (let year = currentYear - 18; year >= 1950; --year) {
      yearList.push(String(year));
    }

    return { daysList, monthList, yearList };
  }

  function getInitialState(): IReducerState {
    const currentDate = new Date();
    const legalSignUpBirthdayYear = currentDate.getFullYear() - 18;

    const state: IReducerState = {
      day: '1',
      year: String(legalSignUpBirthdayYear),
      month: String(Months[currentDate.getMonth()]),
      email: '',
      password: '',
      phone: '',
      emailError: null,
      passwordError: null,
      phoneError: null,
    };

    return state;
  }

  function reducer(state = initialState, action: Action) {
    switch (action.type) {
    case ActionsTypes.SET_DAY:
      return { ...state, day: action.payload };
    case ActionsTypes.SET_MONTH:
      return { ...state, month: action.payload };
    case ActionsTypes.SET_YEAR:
      return { ...state, year: action.payload };
    case ActionsTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case ActionsTypes.SET_PASSWORD:
      return { ...state, password: action.payload };
    case ActionsTypes.SET_PHONE:
      return { ...state, phone: action.payload };
    case ActionsTypes.SET_EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    case ActionsTypes.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.payload };
    case ActionsTypes.SET_PHONE_ERROR:
      return { ...state, phoneError: action.payload };

    default:
      return state;
    }
  }

  function getTextContent() {
    const {
      title,
      subtitle,
      link,
      button,
      description,
      emailPlaceholder,
      phonePlaceholder,
      passwordPlaceholder,
      emailErrorMessage,
      phoneErrorMessage,
      passwordErrorMessage,
    } = data;
    return {
      title,
      subtitle,
      link,
      button,
      description,
      emailPlaceholder,
      phonePlaceholder,
      passwordPlaceholder,
      emailErrorMessage,
      phoneErrorMessage,
      passwordErrorMessage,
    };
  }

  function handlerOnChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    dispatch({ type: ActionsTypes.SET_EMAIL, payload: value });
    dispatch({ type: ActionsTypes.SET_EMAIL_ERROR, payload: null });
  }

  function handlerOnChangePhone(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length <= 13) {
      dispatch({ type: ActionsTypes.SET_PHONE, payload: value });
      dispatch({ type: ActionsTypes.SET_PHONE_ERROR, payload: null });
    }
  }

  function handlerOnChangePassword(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    dispatch({ type: ActionsTypes.SET_PASSWORD, payload: value });
    dispatch({ type: ActionsTypes.SET_PASSWORD_ERROR, payload: null });
  }

  function handlerOnBlurEmail() {
    const isEmailValid = getEmailValidation(email);
    const errorValue = email && !isEmailValid ? emailErrorMessage : null;

    dispatch({ type: ActionsTypes.SET_EMAIL_ERROR, payload: errorValue });
  }

  function handlerOnBlurPhone() {
    const isPhoneValid = getPhoneValidation(phone);
    const errorValue = phone && !isPhoneValid ? phoneErrorMessage : null;

    dispatch({ type: ActionsTypes.SET_PHONE_ERROR, payload: errorValue });
  }

  function handlerOnBlurPassword() {
    const isPasswordValid = getPasswordValidation(password);
    const errorValue = password && !isPasswordValid ? passwordErrorMessage : null;

    dispatch({ type: ActionsTypes.SET_PASSWORD_ERROR, payload: errorValue });
  }

  function setUserMonth(month: string) {
    dispatch({ type: ActionsTypes.SET_MONTH, payload: month });
  }

  function setUserDate(date: string) {
    dispatch({ type: ActionsTypes.SET_DAY, payload: date });
  }

  function setUserYear(year: string) {
    dispatch({ type: ActionsTypes.SET_YEAR, payload: year });
  }

  function handlerOnSubmit(e: FormEvent) {
    const isEmailValid = getEmailValidation(email);
    const isPhoneValid = getPhoneValidation(phone);
    const isPasswordValid = getPasswordValidation(password);

    if (!isEmailValid) {
      dispatch({ type: ActionsTypes.SET_EMAIL_ERROR, payload: emailErrorMessage });
    }

    if (!isPhoneValid) {
      dispatch({ type: ActionsTypes.SET_PHONE_ERROR, payload: phoneErrorMessage });
    }
    if (!isPasswordValid) {
      dispatch({ type: ActionsTypes.SET_PASSWORD_ERROR, payload: passwordErrorMessage });
    }

    if (isEmailValid && isPasswordValid && isPhoneValid) {
      alert('Success');
      emailRef.current.disabled = true;
      passwordRef.current.disabled = true;
      phoneRef.current.disabled = true;
      buttonRef.current.disabled = true;
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
              type='email'
              value={email}
              label={emailError}
              placeholder={emailPlaceholder}
              onChange={handlerOnChangeEmail}
              onBlur={handlerOnBlurEmail}
              $error={Boolean(emailError)}
              $isNotEmpty={Boolean(email)}
              required={true}
              ref={emailRef}
            />
            <InputAuth
              type='tel'
              value={phone}
              label={phoneError}
              placeholder={phonePlaceholder}
              onChange={handlerOnChangePhone}
              onBlur={handlerOnBlurPhone}
              $error={Boolean(phoneError)}
              $isNotEmpty={Boolean(phone)}
              required={true}
              ref={phoneRef}
            />
            <InputAuth
              type='password'
              value={password}
              label={passwordError}
              placeholder={passwordPlaceholder}
              onChange={handlerOnChangePassword}
              onBlur={handlerOnBlurPassword}
              $error={Boolean(passwordError)}
              $isNotEmpty={Boolean(password)}
              required={true}
              ref={passwordRef}
            />
            <Link to={AppRoutes.HOME}>{link}</Link>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{description}</Text>
            <Container>
              <SelectComponent title={month} data={monthList} handler={setUserMonth} />
              <SelectComponent title={day} data={daysList} handler={setUserDate} />
              <SelectComponent title={year} data={yearList} handler={setUserYear} />
            </Container>
            <Button type='submit' ref={buttonRef}>
              {button}
            </Button>
          </Form>
        </Body>
      </AppContainer>
    </PageWrapper>
  );
};
