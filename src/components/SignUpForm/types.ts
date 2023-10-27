export interface IReducerState {
  email: string;
  password: string;
  phone: string;
  emailError: string;
  passwordError: string;
  phoneError: string;
  day: string;
  month: string;
  year: string;
  dayError: boolean;
  monthError: boolean;
  yearError: boolean;
}

export enum ActionsTypes {
  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_PHONE = 'SET_PHONE',
  SET_EMAIL_ERROR = 'SET_EMAIL_ERROR',
  SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR',
  SET_PHONE_ERROR = 'SET_PHONE_ERROR',
  SET_DAY = 'SET_DAY',
  SET_MONTH = 'SET_MONTH',
  SET_YEAR = 'SET_YEAR',
  SET_DAY_ERROR = 'SET_DAY_ERROR',
  SET_MONTH_ERROR = 'SET_MONTH_ERROR',
  SET_YEAR_ERROR = 'SET_YEAR_ERROR',
}

interface SetEmailAction {
  type: ActionsTypes.SET_EMAIL;
  payload: string;
}
interface SetPasswordAction {
  type: ActionsTypes.SET_PASSWORD;
  payload: string;
}
interface SetPhoneAction {
  type: ActionsTypes.SET_PHONE;
  payload: string;
}
interface SetEmailErrorAction {
  type: ActionsTypes.SET_EMAIL_ERROR;
  payload: string;
}
interface SetPasswordErrorAction {
  type: ActionsTypes.SET_PASSWORD_ERROR;
  payload: string;
}
interface SetPhoneErrorAction {
  type: ActionsTypes.SET_PHONE_ERROR;
  payload: string;
}
interface SetDayAction {
  type: ActionsTypes.SET_DAY;
  payload: string;
}
interface SetMonthAction {
  type: ActionsTypes.SET_MONTH;
  payload: string;
}
interface SetYearAction {
  type: ActionsTypes.SET_YEAR;
  payload: string;
}
interface SetDayError {
  type: ActionsTypes.SET_DAY_ERROR;
  payload: boolean;
}
interface SetMonthError {
  type: ActionsTypes.SET_MONTH_ERROR;
  payload: boolean;
}
interface SetYearError {
  type: ActionsTypes.SET_YEAR_ERROR;
  payload: boolean;
}

export type Action =
  | SetEmailAction
  | SetPasswordAction
  | SetPhoneAction
  | SetEmailErrorAction
  | SetPasswordErrorAction
  | SetPhoneErrorAction
  | SetDayAction
  | SetMonthAction
  | SetYearAction
  | SetDayError
  | SetMonthError
  | SetYearError;
