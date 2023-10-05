import { IFont, ITheme } from '@appTypes';
import { colors } from '@constants/variables';

const { black, blue, gray, white, red, green } = colors;

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
      buttonText: white,
      error: red,

      inputFocus: blue,
      inputError: red,
      inputHover: blue,
      inputValid: green,
    },
    animation: {
      transformActive: 'scale(0.95)',
      transition: 'all .3s ease',
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
      buttonText: white,
      error: red,

      inputFocus: blue,
      inputError: red,
      inputHover: blue,
      inputValid: green,
    },
  },
};
