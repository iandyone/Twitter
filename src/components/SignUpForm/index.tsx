import { IUser } from '@appTypes';
import { Months } from '@appTypes/enums';
import twitterIcon from '@assets/icons/twitter.svg';
import { InputAuth } from '@components/InputAuth';
import { SelectComponent } from '@components/Select';
import { AppRoutes, PHONE_MASK } from '@constants/variables';
import { useDispatchTyped } from '@hooks/redux';
import { logoutUser, setUser } from '@store/reducers/user';
import { AppContainer, PageWrapper } from '@styles';
import { getDaysAmountInAMonth } from '@utils/helpers/date';
import { getEmailValidation, getPasswordValidation, getPhoneValidation } from '@utils/helpers/validators';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { ChangeEvent, FC, FormEvent, useEffect, useMemo, useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { data } from './config';
import { Body, Button, Container, Form, Link, Subtitle, Text, Title, TwitterIcon } from './styled';
import { Action, ActionsTypes, IReducerState } from './types';

export const SignUpForm: FC = () => {
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
  const {
    day,
    month,
    year,
    email,
    dayError,
    monthError,
    yearError,
    emailError,
    password,
    passwordError,
    phone,
    phoneError,
  } = state;
  const { daysList, monthList, yearList } = useMemo(getSelectLists, [month]);
  const dispatchRedux = useDispatchTyped();
  const navigate = useNavigate();

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
    const state: IReducerState = {
      day: null,
      year: null,
      month: null,
      email: '',
      password: '',
      phone: '',
      emailError: null,
      passwordError: null,
      phoneError: null,
      dayError: null,
      monthError: null,
      yearError: null,
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
    case ActionsTypes.SET_DAY_ERROR:
      return { ...state, dayError: action.payload };
    case ActionsTypes.SET_MONTH_ERROR:
      return { ...state, monthError: action.payload };
    case ActionsTypes.SET_YEAR_ERROR:
      return { ...state, yearError: action.payload };

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
    const value = '+' + e.target.value.replace(/[^0-9]/g, '');

    if (value.length < 4) {
      dispatch({ type: ActionsTypes.SET_PHONE, payload: PHONE_MASK });
      return;
    }

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

  function handlerOnFocusPhone() {
    if (!phone) dispatch({ type: ActionsTypes.SET_PHONE, payload: PHONE_MASK });
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

  function setUserDate(date: string) {
    dispatch({ type: ActionsTypes.SET_DAY, payload: date });
    dispatch({ type: ActionsTypes.SET_DAY_ERROR, payload: false });
  }

  function setUserMonth(month: string) {
    dispatch({ type: ActionsTypes.SET_MONTH, payload: month });
    dispatch({ type: ActionsTypes.SET_MONTH_ERROR, payload: false });
  }

  function setUserYear(year: string) {
    dispatch({ type: ActionsTypes.SET_YEAR, payload: year });
    dispatch({ type: ActionsTypes.SET_YEAR_ERROR, payload: false });
  }

  function setInputsDisabled(status: boolean = true) {
    if (emailRef) emailRef.current.disabled = status;
    if (passwordRef) passwordRef.current.disabled = status;
    if (buttonRef) buttonRef.current.disabled = status;
    if (phoneRef) phoneRef.current.disabled = status;
  }

  function handlerOnSubmit(e: FormEvent) {
    const isEmailValid = getEmailValidation(email);
    const isPhoneValid = getPhoneValidation(phone);
    const isPasswordValid = getPasswordValidation(password);
    const isValidForm = isEmailValid && isPasswordValid && isPhoneValid && day && month && year;

    if (!day) dispatch({ type: ActionsTypes.SET_DAY_ERROR, payload: true });
    if (!month) dispatch({ type: ActionsTypes.SET_MONTH_ERROR, payload: true });
    if (!year) dispatch({ type: ActionsTypes.SET_YEAR_ERROR, payload: true });
    if (!isEmailValid) dispatch({ type: ActionsTypes.SET_EMAIL_ERROR, payload: emailErrorMessage });
    if (!isPhoneValid) dispatch({ type: ActionsTypes.SET_PHONE_ERROR, payload: phoneErrorMessage });
    if (!isPasswordValid) dispatch({ type: ActionsTypes.SET_PASSWORD_ERROR, payload: passwordErrorMessage });

    if (isValidForm) {
      const auth = getAuth();
      setInputsDisabled();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { uid, email }: IUser = userCredential.user;
          dispatchRedux(setUser({ uid, email }));
          navigate(AppRoutes.page.FEED);
        })
        .catch(() => {
          setInputsDisabled(false);
          dispatchRedux(logoutUser());
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
              onFocus={handlerOnFocusPhone}
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
              <SelectComponent
                title={month ?? 'Month'}
                isValid={monthError}
                data={monthList}
                handler={setUserMonth}
              />
              <SelectComponent
                title={day ?? 'Day'}
                isValid={dayError}
                data={daysList}
                handler={setUserDate}
              />
              <SelectComponent
                title={year ?? 'Year'}
                isValid={yearError}
                data={yearList}
                handler={setUserYear}
              />
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
