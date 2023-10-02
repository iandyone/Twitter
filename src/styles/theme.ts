import { IFont, ITheme } from '@appTypes';

const colors = {
  black: '#000',
  white: '#fff',
};

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
      text: colors.black,
      bgApp: colors.white,
    },
    animation: {
      transformActive: 'scale(0.95)',
      transition: 'all .3s ease',
    },
  },

  dark: {
    font,
    colors: {
      text: colors.black,
      bgApp: colors.white,
    },
  },
};
