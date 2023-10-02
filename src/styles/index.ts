import robotoBlack from '@assets/fonts/Roboto/Roboto-Black.ttf';
import robotoBold from '@assets/fonts/Roboto/Roboto-Bold.ttf';
import robotoLight from '@assets/fonts/Roboto/Roboto-Light.ttf';
import robotoMedium from '@assets/fonts/Roboto/Roboto-Medium.ttf';
import robotoRegular from '@assets/fonts/Roboto/Roboto-Regular.ttf';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;

  &,
  &::before,
  &::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}

:focus,
:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  line-height: 1;
  font-weight:  ${({ theme }) => theme.font.regular};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.text};
  background-color: white;
  scroll-behavior: smooth;
}

input,
button,
textarea {
  font-family: ${({ theme }) => theme.font.family};
}

button {
  cursor: pointer;

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
}

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &:visited {
    text-decoration: none;
  }
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight:  ${({ theme }) => theme.font.regular};
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
}

@font-face {
  font-family: 'Roboto Black';
  src: url(${robotoBlack}) format('truetype');
  font-weight: ${({ theme }) => theme.font.regular};
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Roboto';
  src: url(${robotoBold}) format('truetype');
  font-weight: ${({ theme }) => theme.font.bold};
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Roboto';
  src: url(${robotoLight}) format('truetype');
  font-weight: ${({ theme }) => theme.font.light};
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Roboto';
  src: url(${robotoMedium}) format('truetype');
  font-weight: ${({ theme }) => theme.font.medium};
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Roboto';
  src: url(${robotoRegular}) format('truetype');
  font-weight: ${({ theme }) => theme.font.regular};
  font-style: normal;
  font-display: auto;
}
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
`;

export const AppContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 20px;
  overflow-x: hidden;
`;
