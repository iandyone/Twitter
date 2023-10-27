import { IFont, IFontSize, IGap, ISpace, ITheme } from '@appTypes';
import { colors } from '@constants';

const {
  black,
  blackLight,
  blue,
  gray,
  grayLight,
  grayMedium,
  grayDark,
  white,
  whiteLight,
  whiteGray,
  whiteDark,
  red,
  green,
} = colors;

const size: IFontSize = {
  xs: '14px',
  s: '16px',
  sm: '18px',
  ss: '20px',
  ml: '22px',
  l: '24px',
  sl: '30px',
  vl: '36px',
  xl1: '40px',
  xl2: '42px',
  xl3: '60px',
  xl4: '84px',
};

const gap: IGap = {
  xs: '5px',
  s: '6px',
  sm: '10px',
  ss: '20px',
  ml: '30px',
  l: '80px',
};

const font: IFont = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300,
  family: 'Roboto',
  size: size,
};

const spaces: ISpace = {
  gap: gap,
  avatarHeight: '52px',
};

export const theme: ITheme = {
  light: {
    font,
    colors: {
      text: black,
      link: blue,
      bgApp: white,
      border: gray,
      borderHover: blue,
      buttonBgPrimary: blue,
      buttonBgSecondary: grayLight,
      buttonTextPrimary: white,
      buttonTextPrimarySecondary: whiteGray,
      error: red,

      inputFocus: blue,
      inputError: red,
      inputHover: blue,
      inputValid: green,
      inputBg: white,

      popupBg: blackLight,

      searchBg: grayMedium,
      searchLink: grayDark,
      searchBorder: 'transparent',

      like: red,
      modalBg: white,
      modalText: black,
      modalBorder: 'transparent',

      themeButtonBorder: gray,
      themebuttonBgPrimary: blue,

      burgerLine: black,
      burgerBg: white,
    },
    animations: {
      transformActive: 'scale(0.95)',
      transition: 'all .3s ease',
      opacity: '0.7',
    },
    spaces: spaces,
  },

  dark: {
    font,
    colors: {
      text: whiteLight,
      link: blue,
      bgApp: black,
      border: gray,
      borderHover: blue,
      buttonBgPrimary: blue,
      buttonBgSecondary: blue,
      buttonTextPrimary: white,
      buttonTextPrimarySecondary: white,
      error: red,

      inputFocus: blue,
      inputError: red,
      inputHover: blue,
      inputValid: green,
      inputBg: black,

      searchBg: black,
      searchLink: grayDark,
      searchBorder: gray,

      like: red,
      modalBg: black,
      modalText: black,
      modalBorder: gray,

      popupBg: whiteDark,

      themeButtonBorder: blue,
      themebuttonBgPrimary: gray,

      burgerLine: whiteLight,
      burgerBg: black,
    },
    animations: {
      transformActive: 'scale(0.95)',
      transition: 'all .3s ease',
      opacity: '0.7',
    },
    spaces: spaces,
  },
};
