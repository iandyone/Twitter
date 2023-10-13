import { IUser } from '@appTypes';
import { Months } from '@appTypes/enums';
import twitterIcon from '@assets/icons/twitter.svg';
import { InputAuth } from '@components/InputAuth';
import { Select } from '@components/Select';
import { AppRoutes, PHONE_MASK } from '@constants/variables';
import { useDispatchTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { logoutUser, setUser } from '@store/reducers/user';
import { AppContainer, PageWrapper } from '@styles';
import { getDateData, getDaysAmountInAMonth } from '@utils/helpers/date';
import { getEmailValidation, getPasswordValidation, getPhoneValidation } from '@utils/helpers/validators';
import { ChangeEvent, FC, FormEvent, useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
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
  const { month: currentMonth, year: currentYear } = getDateData(new Date());
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

  const { daysList, monthList, yearList } = useMemo(getSelectLists, [currentMonth, currentYear]);
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

  function getSelectLists() {
    const legalAge = 18;

    const daysList = [];
    const yearList = [];
    const monthList = Object.keys(Months).filter((month) => month.length > 2);
    const daysInAMonth = getDaysAmountInAMonth(new Date(currentYear, currentMonth));

    for (let day = 1; day <= daysInAMonth; ++day) {
      daysList.push(String(day));
    }

    for (let year = currentYear - legalAge; year >= 1950; --year) {
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

  function getTextContent() {
    return { ...data };
  }

  const handlerOnChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      dispatch({ type: ActionsTypes.SET_EMAIL, payload: value });
      dispatch({ type: ActionsTypes.SET_EMAIL_ERROR, payload: null });
    },
    [dispatch],
  );

  const handlerOnChangePhone = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = '+' + e.target.value.replace(/[^0-9]/g, '');

      if (value.length < 4) {
        dispatch({ type: ActionsTypes.SET_PHONE, payload: PHONE_MASK });
        return;
      }

      if (value.length <= 13) {
        dispatch({ type: ActionsTypes.SET_PHONE, payload: value });
        dispatch({ type: ActionsTypes.SET_PHONE_ERROR, payload: null });
      }
    },
    [dispatch],
  );

  const handlerOnChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      dispatch({ type: ActionsTypes.SET_PASSWORD, payload: value });
      dispatch({ type: ActionsTypes.SET_PASSWORD_ERROR, payload: null });
    },
    [dispatch],
  );

  const handlerOnFocusPhone = useCallback(() => {
    if (!phone) dispatch({ type: ActionsTypes.SET_PHONE, payload: PHONE_MASK });
  }, [phone, dispatch]);

  const handlerOnBlurEmail = useCallback(() => {
    const isEmailValid = getEmailValidation(email);
    const errorValue = email && !isEmailValid ? emailErrorMessage : null;

    dispatch({ type: ActionsTypes.SET_EMAIL_ERROR, payload: errorValue });
  }, [email, emailErrorMessage, dispatch]);

  const handlerOnBlurPhone = useCallback(() => {
    const isPhoneValid = getPhoneValidation(phone);
    const errorValue = phone && !isPhoneValid ? phoneErrorMessage : null;

    dispatch({ type: ActionsTypes.SET_PHONE_ERROR, payload: errorValue });
  }, [phone, phoneErrorMessage, dispatch]);

  const handlerOnBlurPassword = useCallback(() => {
    const isPasswordValid = getPasswordValidation(password);
    const errorValue = password && !isPasswordValid ? passwordErrorMessage : null;

    dispatch({ type: ActionsTypes.SET_PASSWORD_ERROR, payload: errorValue });
  }, [password, passwordErrorMessage, dispatch]);

  const setUserDate = useCallback(
    (date: string) => {
      dispatch({ type: ActionsTypes.SET_DAY, payload: date });
      dispatch({ type: ActionsTypes.SET_DAY_ERROR, payload: false });
    },
    [dispatch],
  );

  const setUserMonth = useCallback(
    (month: string) => {
      dispatch({ type: ActionsTypes.SET_MONTH, payload: month });
      dispatch({ type: ActionsTypes.SET_MONTH_ERROR, payload: false });
    },
    [dispatch],
  );

  const setUserYear = useCallback(
    (year: string) => {
      dispatch({ type: ActionsTypes.SET_YEAR, payload: year });
      dispatch({ type: ActionsTypes.SET_YEAR_ERROR, payload: false });
    },
    [dispatch],
  );

  function setInputsDisabled(status: boolean = true) {
    if (emailRef) emailRef.current.disabled = status;
    if (passwordRef) passwordRef.current.disabled = status;
    if (buttonRef) buttonRef.current.disabled = status;
    if (phoneRef) phoneRef.current.disabled = status;
  }

  async function handlerOnSubmit(e: FormEvent) {
    e.preventDefault();
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
      try {
        setInputsDisabled();
        const { uid } = await firebaseDB.getAuthWithEmailAndPass(email, password);
        const birthMonth = Months[month as keyof typeof Months];
        const birthDay = Number(day);
        const birthYear = Number(year);
        const userBirthday = new Date(birthYear, birthMonth, birthDay).getTime();

        const user: IUser = { uid, email, birthday: userBirthday };

        dispatchRedux(setUser(user));
        firebaseDB.addUser(user);
        navigate(AppRoutes.page.FEED);
      } catch (error) {
        setInputsDisabled(false);
        dispatchRedux(logoutUser());
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
              <Select
                title={month ?? 'Month'}
                isValid={monthError}
                data={monthList}
                onClick={setUserMonth}
                type='month'
              />
              <Select
                title={day ?? 'Day'}
                isValid={dayError}
                data={daysList}
                onClick={setUserDate}
                type='day'
              />
              <Select
                title={year ?? 'Year'}
                isValid={yearError}
                data={yearList}
                onClick={setUserYear}
                type='year'
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
