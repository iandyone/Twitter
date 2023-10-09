import robotoBlack from '@assets/fonts/Roboto/Roboto-Black.ttf';
import robotoBold from '@assets/fonts/Roboto/Roboto-Bold.ttf';
import robotoLight from '@assets/fonts/Roboto/Roboto-Light.ttf';
import robotoMedium from '@assets/fonts/Roboto/Roboto-Medium.ttf';
import robotoRegular from '@assets/fonts/Roboto/Roboto-Regular.ttf';
import { TABLET_VIEW, USER_ELEMENT_HEIGHT } from '@constants/variables';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle, css } from 'styled-components';

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
  transition: ${({ theme }) => theme.animation.transition};
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

export const AppContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 20px;
  overflow-x: hidden;
  min-height: 100vh;
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
`;

export const Icon = styled.img`
  @media (max-width: 1400px) {
    margin-bottom: 0px;
  }
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
`;

export const TitleTemplate = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.bold};
  transition: ${({ theme }) => theme.animation.transition};
`;

export const SubtitleTemplate = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.bold};
`;

export const ButtonTemplate = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 76px;
  width: 100%;
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.font.size};
  background: ${({ theme }) => theme.colors.buttonBg};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animation.transition};
    border-color: ${({ theme }) => theme.colors.link};
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    transform: ${({ theme }) => theme.animation.transformActive};
  }
`;

export const LinkTemplate = styled(Link)`
  color: ${({ theme }) => theme.colors.link};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const InputTemplate = styled.input<{ $error?: boolean; $isNotEmpty?: boolean }>`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size};
  transition: ${({ theme }) => theme.animation.transition};

  &:focus {
    border-color: ${({ theme }) => theme.colors.inputFocus};
    transition: ${({ theme }) => theme.animation.transition};
  }

  &:hover {
    transition: ${({ theme }) => theme.animation.transition};
    border-color: ${({ theme }) => theme.colors.inputHover};
  }

  ${({ $error, $isNotEmpty }) =>
    $error &&
    $isNotEmpty &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
    `}

  ${({ $error, $isNotEmpty }) =>
    !$error &&
    $isNotEmpty &&
    css`
      border-color: ${({ theme }) => theme.colors.inputValid};
      transition: ${({ theme }) => theme.animation.transition};
    `}
`;

export const FormTemplate = styled.form`
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  width: 100%;
}
`;

export const SidesTemplate = styled.div`
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 1400px) {
    padding: 20px 20px;
  }

  @media (max-width: ${TABLET_VIEW}px) {
    min-height: auto;
  }
`;

export const UserData = styled.div`
  display: flex;
  column-gap: 10px;
  width: 100%;
`;

export const UserAvatar = styled(Icon)`
  width: ${USER_ELEMENT_HEIGHT};
  height: ${USER_ELEMENT_HEIGHT};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  font-size: 16px;
  overflow: hidden;
`;

export const UserName = styled(TitleTemplate)`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 120%;
`;

export const UserEmail = styled.p`
  opacity: ${({ theme }) => theme.animation.buttonHoverOpacity};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 120%;
`;

export const PageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
