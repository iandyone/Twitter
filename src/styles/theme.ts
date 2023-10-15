import { IFont, ITheme } from '@appTypes';
import { colors } from '@constants/variables';

const { black, black2, blue, gray, gray2, gray3, gray4, white, white2, white3, white4, red, green } = colors;

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
      buttonText2: white3,
      error: red,

      inputFocus: blue,
      inputError: red,
      inputHover: blue,
      inputValid: green,
      inputBg: white,

      popupBg: black2,

      searchBg: gray3,
      searchLink: gray4,
      searchBorder: 'transparent',

      like: red,
      modalBg: white,
      modalText: black,
      modalBorder: 'transparent',

      themeButtonBorder: gray,
      themeButtonBg: blue,

      burgerLine: black,
      burgerBg: white,
    },
    animations: {
      transformActive: 'scale(0.95)',
      transition: 'all .3s ease',
      opacity: '0.7',
    },
  },

  dark: {
    font,
    colors: {
      text: white2,
      link: blue,
      bgApp: black,
      border: gray,
      borderHover: blue,
      buttonBg: blue,
      buttonBg2: blue,
      buttonText: white,
      buttonText2: white,
      error: red,

      inputFocus: blue,
      inputError: red,
      inputHover: blue,
      inputValid: green,
      inputBg: black,

      searchBg: black,
      searchLink: gray4,
      searchBorder: gray,

      like: red,
      modalBg: black,
      modalText: black,
      modalBorder: gray,

      popupBg: white4,

      themeButtonBorder: blue,
      themeButtonBg: gray,

      burgerLine: white2,
      burgerBg: black,
    },
    animations: {
      transformActive: 'scale(0.95)',
      transition: 'all .3s ease',
      opacity: '0.7',
    },
  },
};
