import { IFont, ITheme } from '@appTypes';
import { colors } from '@constants/variables';

const { black, blue, gray, gray2, gray3, gray4, white, red, green } = colors;

const font: IFont = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300,
  family: 'Roboto',
  size: '18px',
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
      buttonBg: blue,
      buttonBg2: gray2,
      buttonText: white,
      error: red,

      inputFocus: blue,
      inputError: red,
      inputHover: blue,
      inputValid: green,

      searchBg: gray3,
      searchLink: gray4,

      like: red,
      modalBg: white,
      modalText: black,

      themeButtonBorder: gray,
      themeButtonBg: blue,

      burgerLine: black,
      burgerBg: white,
    },
    animation: {
      transformActive: 'scale(0.95)',
      transition: 'all .3s ease',
      opacity: '0.7',
    },
  },

  dark: {
    font,
    colors: {
      text: blue,
      link: blue,
      bgApp: white,
      border: gray,
      borderHover: blue,
      buttonBg: blue,
      buttonBg2: gray2,
      buttonText: white,
      error: red,

      inputFocus: blue,
      inputError: red,
      inputHover: blue,
      inputValid: green,

      searchBg: gray3,
      searchLink: gray4,

      like: red,
      modalBg: black,
      modalText: black,

      themeButtonBorder: blue,
      themeButtonBg: gray,

      burgerLine: black,
      burgerBg: white,
    },
    animation: {
      transformActive: 'scale(0.95)',
      transition: 'all .3s ease',
      opacity: '0.7',
    },
  },
};
