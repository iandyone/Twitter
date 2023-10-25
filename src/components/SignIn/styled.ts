import { Viewports } from '@appTypes/enums';
import { Icon, LinkTemplate, TitleTemplate } from '@styles';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const { TABLET, TABLET_SMALL, DESKTOP } = Viewports;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
`;

export const Banner = styled.div`
  flex: 0 1 60%;
  user-select: none;

  @media (max-width: ${TABLET}) {
    position: absolute;
    opacity: 0.25;
    width: 100%;
  }

  @media (max-width: ${TABLET_SMALL}) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: calc(100vh - 100px);
  object-fit: cover;
  background: ${({ theme }) => theme.colors.buttonBgSecondary};
  background-size: cover;
`;

export const Content = styled.div`
  flex: 0 1 40%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.gap.ml};
  position: relative;
  z-index: 10;

  @media (max-width: ${DESKTOP}) {
    padding-top: ${({ theme }) => theme.spaces.gap.ss};
  }
  @media (max-width: ${DESKTOP}), (max-height: 900px) {
    padding-top: ${({ theme }) => theme.spaces.gap.ss};
  }
  @media (max-width: ${TABLET}) {
    flex: 1 1 auto;
    padding: ${({ theme }) => theme.spaces.gap.ss};
    row-gap: 50px;
  }
  @media (max-width: ${TABLET_SMALL}) {
    justify-content: center;
    padding: ${({ theme }) => theme.spaces.gap.ss} 10px;
    row-gap: 50px;
  }
`;

export const TwitterIcon = styled(Icon)`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: ${({ theme }) => theme.spaces.gap.ss};

  @media (max-width: ${TABLET}) {
    align-self: center;
    margin-bottom: 0;
  }
`;

export const Title = styled(TitleTemplate)`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.bold};
  transition: ${({ theme }) => theme.animations.transition};
  font-size: ${({ theme }) => theme.font.size.xl4};

  @media (max-width: ${DESKTOP}) {
    font-size: ${({ theme }) => theme.font.size.xl1};
  }
  @media (max-width: ${TABLET}) {
    font-size: ${({ theme }) => theme.font.size.xl3};
    text-align: center;
  }
  @media (max-width: ${TABLET_SMALL}) {
    font-size: ${({ theme }) => theme.font.size.xl1};
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.font.bold};
  transition: ${({ theme }) => theme.animations.transition};
  font-size: ${({ theme }) => theme.font.size.xl2};

  @media (max-width: ${DESKTOP}) {
    font-size: ${({ theme }) => theme.font.size.sl};
  }
  @media (max-width: ${TABLET}) {
    font-size: ${({ theme }) => theme.font.size.xl1};
    text-align: center;
    margin-bottom: 0;
  }
  @media (max-width: ${TABLET_SMALL}) {
    font-size: ${({ theme }) => theme.font.size.sl};
    text-align: center;
    margin-bottom: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.gap.ss};
`;

export const Button = styled(RouterLink)`
  border-radius: 42px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  transition: ${({ theme }) => theme.animations.transition};
  font-weight: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.font.size.ss};
  display: flex;
  column-gap: ${({ theme }) => theme.spaces.gap.xs};
  color: ${({ theme }) => theme.colors.buttonTextPrimarySecondary};

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animations.transition};
    border-color: ${({ theme }) => theme.colors.link};
  }

  &:active {
    transition: ${({ theme }) => theme.animations.transition};
    transform: ${({ theme }) => theme.animations.transformActive};
  }

  @media (max-width: ${DESKTOP}) {
    font-size: ${({ theme }) => theme.font.size.s};
    height: 40px;
  }

  @media (max-width: ${TABLET}) {
    flex: 1 1 auto;
    border-color: ${({ theme }) => theme.colors.text};
    transition: ${({ theme }) => theme.animations.transition};
    align-self: center;
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: ${TABLET_SMALL}) {
    flex: 1 1 auto;
    border-color: ${({ theme }) => theme.colors.border};
    transition: ${({ theme }) => theme.animations.transition};
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.gap.ss};
`;

export const Link = styled(LinkTemplate)`
  color: ${({ theme }) => theme.colors.link};
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  line-height: 140%;

  @media (max-width: ${TABLET}) {
    text-align: center;
  }
`;

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.spaces.gap.ss};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.gap.sm};

  @media (max-width: ${TABLET_SMALL}) {
    padding: ${({ theme }) => theme.spaces.gap.ss} 10px;
  }
`;

export const FooterLink = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    text-decoration: underline;
  }
`;
