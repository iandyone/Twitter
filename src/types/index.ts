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

  error: string;

  searchBg: string;
  searchLink: string;

  inputFocus: string;
  inputHover: string;
  inputError: string;
  inputValid: string;

  burgerLine: string;
  burgerBg: string;

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
  buttonHoverOpacity: string;
}

export interface IFooterLink {
  text: string;
  to: string;
}

export interface IUser {
  email: string;
  uid: string;
}

export interface ISideMenuOption {
  title: string;
  path: string;
  icon: string;
}
