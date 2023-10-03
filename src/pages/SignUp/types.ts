export interface IReducerState {
  email: string;
  password: string;
  phone: string;
  emailError: string;
  passwordError: string;
  phoneError: string;
  month: string;
  day: string;
  year: string;
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

export type Action =
  | SetEmailAction
  | SetPasswordAction
  | SetPhoneAction
  | SetEmailErrorAction
  | SetPasswordErrorAction
  | SetPhoneErrorAction
  | SetDayAction
  | SetMonthAction
  | SetYearAction;
