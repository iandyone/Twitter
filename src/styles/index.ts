import { Viewports } from '@appTypes/enums';
import robotoBlack from '@assets/fonts/Roboto/Roboto-Black.ttf';
import robotoBold from '@assets/fonts/Roboto/Roboto-Bold.ttf';
import robotoLight from '@assets/fonts/Roboto/Roboto-Light.ttf';
import robotoMedium from '@assets/fonts/Roboto/Roboto-Medium.ttf';
import robotoRegular from '@assets/fonts/Roboto/Roboto-Regular.ttf';
import { colors } from '@constants';
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
  font-size: ${({ theme }) => theme.font.size.sm};
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

form {
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  width: 100%;
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

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background-color: rgba(196, 196, 196, 0.80);
}

::-webkit-scrollbar-thumb {
  background-color: ${colors.blue};
  border-radius: 8px;
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
  padding: 0 ${({ theme }) => theme.spaces.gap.ss};
  overflow: hidden;
`;

export const PageWrapper = styled.div`
  transition: ${({ theme }) => theme.animations.transition};
  background-color: ${({ theme }) => theme.colors.bgApp};
  min-height: 100vh;
`;

export const Icon = styled.img`
  @media (max-width: ${Viewports.DESKTOP}) {
    margin-bottom: 0;
  }
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const TitleTemplate = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.bold};
  transition: ${({ theme }) => theme.animations.transition};
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
  color: ${({ theme }) => theme.colors.buttonTextPrimary};
  font-size: ${({ theme }) => theme.font.size.sm};
  background: ${({ theme }) => theme.colors.buttonBgPrimary};
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animations.transition};
    border-color: ${({ theme }) => theme.colors.link};
  }

  &:active {
    transition: ${({ theme }) => theme.animations.transition};
    transform: ${({ theme }) => theme.animations.transformActive};
  }
`;

export const LinkTemplate = styled(Link)`
  color: ${({ theme }) => theme.colors.link};
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const InputTemplate = styled.input<{ $error?: boolean; $isNotEmpty?: boolean }>`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.sm};
  transition: ${({ theme }) => theme.animations.transition};

  &:focus {
    border-color: ${({ theme }) => theme.colors.inputFocus};
    transition: ${({ theme }) => theme.animations.transition};
  }

  &:hover {
    transition: ${({ theme }) => theme.animations.transition};
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
      transition: ${({ theme }) => theme.animations.transition};
    `}
`;

export const SidesTemplate = styled.div`
  padding: ${({ theme }) => theme.spaces.gap.ss};
  width: 100%;
  margin: 0 auto;
  min-height: 100%;

  @media (max-width: ${Viewports.DESKTOP}) {
    padding: ${({ theme }) => theme.spaces.gap.ss} ${({ theme }) => theme.spaces.gap.ss};
  }

  @media (max-width: ${Viewports.TABLET}) {
    min-height: auto;
  }
`;

export const UserData = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.spaces.gap.sm};
  width: 100%;
`;

export const UserAvatar = styled(Icon)`
  width: ${({ theme }) => theme.spaces.avatarHeight};
  height: ${({ theme }) => theme.spaces.avatarHeight};
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${({ theme }) => theme.spaces.gap.sm};
  font-size: ${({ theme }) => theme.font.size.s};
  overflow: hidden;
`;

export const UserName = styled(TitleTemplate)`
  font-size: ${({ theme }) => theme.font.size.s};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 120%;
`;

export const UserEmail = styled.p`
  opacity: ${({ theme }) => theme.animations.opacity};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 120%;
`;

export const PageContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: ${({ theme }) => theme.spaces.gap.ss} 0;
`;

export const UserContact = styled.span`
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.regular};
  opacity: ${({ theme }) => theme.animations.opacity};
`;

export const SubHeader = styled(TitleTemplate)`
  padding: ${({ theme }) => theme.spaces.gap.ss} 90px;
  font-size: ${({ theme }) => theme.font.size.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  align-self: flex-start;
  margin-bottom: 40px;

  @media (max-width: ${Viewports.TABLET}) {
    margin-bottom: ${({ theme }) => theme.spaces.gap.ss};
  }
  @media (max-width: ${Viewports.MOBILE}) {
    align-self: center;
    width: 100%;
    text-align: center;
    padding: ${({ theme }) => theme.spaces.gap.ss} 0;
  }
`;

export const LabelTemplate = styled.label`
  color: ${({ theme }) => theme.colors.error};
  transition: ${({ theme }) => theme.animations.transition};
  font-size: ${({ theme }) => theme.font.size.xs};
`;
