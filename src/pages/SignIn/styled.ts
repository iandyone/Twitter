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

  @media (max-width: 992px) {
    position: absolute;
    opacity: 0.25;
    width: 100%;
    user-event: none;
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
  @media (max-width: 992px) {
    flex: 1 1 auto;
    padding: 20px;
  }
  @media (max-width: 500px) {
    justify-content: center;
    padding: 20px 10px;
  }
`;

export const TwitterIcon = styled.img`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: 58px;

  @media (max-width: 1400px) {
    margin-bottom: 0px;
  }

  @media (max-width: 992px) {
    align-self: center;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: 84px;

  @media (max-width: 1400px) {
    font-size: 40px;
  }
  @media (max-width: 992px) {
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
  font-size: 42px;

  @media (max-width: 1400px) {
    font-size: 30px;
  }
  @media (max-width: 992px) {
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
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

export const Button = styled.a.attrs(() => ({
  href: '/',
}))`
  border-radius: 42px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 0.8;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  color: ${({ theme }) => theme.colors.text};
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

  @media (max-width: 992px) {
    flex: 1 1 auto;
    border-color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 500px) {
    flex: 1 1 auto;
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

export const GoogleIcon = styled.img``;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Link = styled.a.attrs(({ href }) => ({
  href: href,
  target: '_blank',
}))`
  color: ${({ theme }) => theme.colors.link};

  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  line-height: 140%;
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

export const FooterLink = styled.a.attrs(({ href }) => ({
  href: href,
  target: '_blank',
}))`
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    text-decoration: underline;
  }
`;
