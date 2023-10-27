import { IFillColors } from '@appTypes';

export const PHONE_MASK = '+375';
export const NAME_MAX_LENGTH = 20;
export const USER_MAX_BORN_YEAR = 1950;

export const colors = {
  black: '#272727',
  blackLight: '#000000cc',
  white: '#fff',
  whiteLight: '#e7e9ea',
  whiteGray: '#0000009e',
  whiteDark: '#242d34cc',
  blue: '#1da1f2',
  gray: '#e4eaed',
  grayLight: '#b3b8bb',
  grayMedium: '#eff3f4',
  grayDark: '#536471',
  red: '#ff4949',
  green: '#58e967',
};

export const AppRoutes = {
  HOME: '/',
  SIGNIN: '/signin',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  UNKNOWN: '/*',
  page: {
    FEED: '/page/feed',
    PROFILE: '/page/profile',
  },
};

const { black, white, blue } = colors;

export const defaultColors: IFillColors = {
  dark: black,
  light: white,
  active: blue,
};
