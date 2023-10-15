import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import { Icon, LinkTemplate, TitleTemplate } from '@styles';
import { Link as RouterLink } from 'react-router-dom';
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

  @media (max-width: ${Viewposts.TABLET}px) {
    position: absolute;
    opacity: 0.25;
    width: 100%;
  }

  @media (max-width: ${Viewposts.TABLET_SMALL}px) {
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

  @media (max-width: ${Viewposts.DESKTOP}px) {
    padding-top: 5%;
  }
  @media (max-width: ${Viewposts.DESKTOP}px), (max-height: 900px) {
    padding-top: ${DEFAULT_GAP};
  }
  @media (max-width: ${Viewposts.TABLET}px) {
    flex: 1 1 auto;
    padding: ${DEFAULT_GAP};
    row-gap: 50px;
  }
  @media (max-width: ${Viewposts.TABLET_SMALL}px) {
    justify-content: center;
    padding: ${DEFAULT_GAP} 10px;
    row-gap: 50px;
  }
`;

export const TwitterIcon = styled(Icon)`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: ${DEFAULT_GAP};

  @media (max-width: ${Viewposts.TABLET}px) {
    align-self: center;
    margin-bottom: 0px;
  }
`;

export const Title = styled(TitleTemplate)`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.bold};
  transition: ${({ theme }) => theme.animations.transition};
  font-size: 84px;

  @media (max-width: ${Viewposts.DESKTOP}px) {
    font-size: 40px;
  }
  @media (max-width: ${Viewposts.TABLET}px) {
    font-size: 60px;
    text-align: center;
  }
  @media (max-width: ${Viewposts.TABLET_SMALL}px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.font.bold};
  transition: ${({ theme }) => theme.animations.transition};
  font-size: 42px;

  @media (max-width: ${Viewposts.DESKTOP}px) {
    font-size: 30px;
  }
  @media (max-width: ${Viewposts.TABLET}px) {
    font-size: 40px;
    text-align: center;
    margin-bottom: 0px;
  }
  @media (max-width: ${Viewposts.TABLET_SMALL}px) {
    font-size: 30px;
    text-align: center;
    margin-bottom: 0px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${DEFAULT_GAP};
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
  font-size: 20px;
  display: flex;
  column-gap: 5px;
  color: ${({ theme }) => theme.colors.buttonText2};

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animations.transition};
    border-color: ${({ theme }) => theme.colors.link};
  }

  &:active {
    transition: ${({ theme }) => theme.animations.transition};
    transform: ${({ theme }) => theme.animations.transformActive};
  }

  @media (max-width: ${Viewposts.DESKTOP}px) {
    font-size: 16px;
    height: 40px;
  }

  @media (max-width: ${Viewposts.TABLET}px) {
    flex: 1 1 auto;
    border-color: ${({ theme }) => theme.colors.text};
    transition: ${({ theme }) => theme.animations.transition};
    align-self: center;
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: ${Viewposts.TABLET_SMALL}px) {
    flex: 1 1 auto;
    border-color: ${({ theme }) => theme.colors.border};
    transition: ${({ theme }) => theme.animations.transition};
  }
`;

export const GoogleIcon = styled.img``;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${DEFAULT_GAP};
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

  @media (max-width: ${Viewposts.TABLET}px) {
    text-align: center;
  }
`;

export const Footer = styled.footer`
  padding: ${DEFAULT_GAP};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media (max-width: ${Viewposts.TABLET_SMALL}px) {
    padding: ${DEFAULT_GAP} 10px;
  }
`;

export const FooterLink = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    text-decoration: underline;
  }
`;
