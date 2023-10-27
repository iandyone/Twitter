import { Gender, handler } from './types';

export interface ITheme {
  dark: IThemeStyles;
  light: IThemeStyles;
}

export interface IThemeStyles {
  font: IFont;
  colors: IColor;
  spaces: ISpace;
  animations: IAnimation;
}

export interface IUserProps {
  userName: string;
  userEmail: string;
}

export interface IColor {
  text: string;
  border: string;
  link: string;

  borderHover: string;

  bgApp: string;

  buttonBgPrimary: string;
  buttonBgSecondary: string;
  buttonTextPrimary: string;
  buttonTextPrimarySecondary: string;

  error: string;

  searchBg: string;
  searchLink: string;
  searchBorder: string;

  inputFocus: string;
  inputHover: string;
  inputError: string;
  inputValid: string;
  inputBg: string;

  burgerLine: string;
  burgerBg: string;

  like: string;

  modalBg: string;
  modalText: string;
  modalBorder: string;

  popupBg: string;

  themeButtonBorder: string;
  themebuttonBgPrimary: string;
}

export interface IFont {
  bold: number;
  regular: number;
  medium: number;
  light: number;
  family: string;
  size: IFontSize;
}

export interface IFontSize {
  xs: string;
  s: string;
  ss: string;
  sm: string;
  ml: string;
  l: string;
  sl: string;
  vl: string;
  xl1: string;
  xl2: string;
  xl3: string;
  xl4: string;
}

export interface ISpace {
  gap: IGap;
  avatarHeight: string;
}

export interface IGap {
  xs: string;
  s: string;
  ss: string;
  sm: string;
  ml: string;
  l: string;
}

export interface IAnimation {
  transition?: string;
  transformActive?: string;
  opacity: string;
}

export interface IFooterLink {
  text: string;
  to: string;
}

export interface IUser extends IUserProfileData {
  email: string;
  uid: string;
  birthday?: number;
  avatar?: string;
}

export interface IUserProfileData {
  name?: string;
  telegram?: string;
  password?: string;
  gender?: Gender;
}
export interface ISideMenuOption {
  title: string;
  path: string;
  onClick?: handler;
  element: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  active: boolean;
  testID: string;
}

export interface IPost {
  id: number;
  user: string;
  email: string;
  body: string;
  likes: string[] | number;
  authorAvatar?: string;
  authName?: string;
  media?: boolean;
}

export interface IPostDB extends IPost {
  timestamp: object | number;
}

export interface IIconComponentProps {
  isActive?: boolean;
  onClick?: handler;
}

export interface IFillColors {
  light: string;
  dark: string;
  active?: string;
}
