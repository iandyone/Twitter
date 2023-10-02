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
  otherDate?: string;
  border?: string;
  active?: string;
  rangeStart?: string;
  rangeEnd?: string;
  inRange?: string;
  holiday?: string;
  error?: string;
  textLight?: string;
  hover?: string;
  bgApp: string;
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
