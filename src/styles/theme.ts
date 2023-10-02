import { IFont, ITheme } from '@appTypes';
import { colors } from '@constants/variables';

const { black, blue, gray, white } = colors;

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
    },
    animation: {
      transformActive: 'scale(0.95)',
      transition: 'all .3s ease',
    },
  },

  dark: {
    font,
    colors: {
      text: black,
      link: blue,
      bgApp: white,
      border: gray,
      borderHover: blue,
    },
  },
};
