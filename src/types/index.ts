import { Gender, handler } from './types';
import { NamedExoticComponent } from 'react';
export interface ITheme {
  dark: IThemeStyles;
  light: IThemeStyles;
}

export interface IThemeStyles {
  font: IFont;
  colors: IColor;
  spaces?: ISpace;
  animation?: IAnimation;
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

  buttonBg: string;
  buttonBg2: string;
  buttonText: string;
  buttonText2: string;

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
  themeButtonBg: string;
}

export interface IFont {
  size: string;
  bold: number;
  regular: number;
  medium: number;
  light: number;
  family: string;
}

export interface ISpace {
  borderRadius?: string;
  inputPadding?: string;
  loaderSize?: string;
  padding?: string;
  height?: string;
  width?: string;
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
  element: NamedExoticComponent<ILikeIconProps>;
}

export interface IPost {
  id: number;
  user: string;
  email: string;
  body: string;
  likes: string[] | number;
  authorAvatar?: string;
  authName?: string;
}

export interface IPostDB extends IPost {
  timestamp: object | number;
}

export interface ILikeIconProps {
  isActive?: boolean;
  onClick?: handler;
}
