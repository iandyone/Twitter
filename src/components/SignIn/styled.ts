import { TABLET_VIEW } from '@constants/variables';
import { Icon, LinkTemplate, TitleTemplate } from '@styles';
import { Link as LinkLRouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
`;

export const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
`;

export const Banner = styled.div`
  flex: 0 1 60%;
  user-select: none;

  @media (max-width: ${TABLET_VIEW}px) {
    position: absolute;
    opacity: 0.25;
    width: 100%;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: calc(100vh - 100px);
  object-fit: cover;
`;

export const Content = styled.div`
  flex: 0 1 40%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-top: 12vh;

  @media (max-width: 1400px) {
    padding-top: 5%;
  }
  @media (max-width: ${TABLET_VIEW}px) {
    flex: 1 1 auto;
    padding: 20px;
    row-gap: 50px;
  }
  @media (max-width: 500px) {
    justify-content: center;
    padding: 20px 10px;
    row-gap: 50px;
  }
`;

export const TwitterIcon = styled(Icon)`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: 58px;

  @media (max-width: ${TABLET_VIEW}px) {
    align-self: center;
    margin-bottom: 0px;
  }
`;

export const Title = styled(TitleTemplate)`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.bold};
  transition: ${({ theme }) => theme.animation.transition};
  font-size: 84px;

  @media (max-width: 1400px) {
    font-size: 40px;
  }
  @media (max-width: ${TABLET_VIEW}px) {
    font-size: 60px;
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.font.bold};
  transition: ${({ theme }) => theme.animation.transition};
  font-size: 42px;

  @media (max-width: 1400px) {
    font-size: 30px;
  }
  @media (max-width: ${TABLET_VIEW}px) {
    font-size: 40px;
    text-align: center;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    text-align: center;
    margin-bottom: 0px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Button = styled(LinkLRouterLink)`
  border-radius: 42px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: ${({ theme }) => theme.animation.buttonHoverOpacity};
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.font.medium};
  font-size: 20px;
  display: flex;
  column-gap: 5px;
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

  @media (max-width: 1400px) {
    font-size: 16px;
    height: 40px;
  }

  @media (max-width: ${TABLET_VIEW}px) {
    flex: 1 1 auto;
    border-color: ${({ theme }) => theme.colors.text};
    transition: ${({ theme }) => theme.animation.transition};
    align-self: center;
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: 500px) {
    flex: 1 1 auto;
    border-color: ${({ theme }) => theme.colors.border};
    transition: ${({ theme }) => theme.animation.transition};
  }
`;

export const GoogleIcon = styled.img``;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Link = styled(LinkTemplate)`
  color: ${({ theme }) => theme.colors.link};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  line-height: 140%;

  @media (max-width: ${TABLET_VIEW}px) {
    text-align: center;
  }
`;

export const Footer = styled.footer`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media (max-width: 500px) {
    padding: 20px 10px;
  }
`;

export const FooterLink = styled(LinkLRouterLink)`
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    text-decoration: underline;
  }
`;
