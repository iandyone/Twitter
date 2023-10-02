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

export interface IFont {
  size: string;
  bold: number;
  regular: number;
  medium: number;
  light: number;
  family: string;
}

export interface IColor {
  text?: string;
  border?: string;
  active?: string;
  hover?: string;
  bgApp: string;
  borderHover?: string;
  link: string;
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
}

export interface IFooterLink {
  text: string;
  href: string;
}
