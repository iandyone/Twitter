import { MOBILE_VIEW, TABLET_VIEW } from '@constants/variables';
import { ButtonTemplate, Icon, SidesTemplate } from '@styles';
import styled from 'styled-components';

const elementHeight = '55px';

export const Wrapper = styled.aside`
  position: relative;
  max-width: 300px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: none;
  }
`;

export const Container = styled(SidesTemplate)`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: space-between;
  padding: 20px 20px 20px 0;
  height: 100vh;
  position: fixed;

  @media (max-width: 1400px) {
    max-width: none;
    width: 250px;
    align-items: flex-start;
  }
  @media (max-width: 1200px) {
    width: 200px;
  }
  @media (max-width: ${TABLET_VIEW}px) {
    position: static;
    height: auto;
    justify-content: initial;
    align-items: center;
    width: 200px;
    row-gap: 30px;
    padding-right: 10px;
    width: 100%;
  }
  @media (max-width: ${MOBILE_VIEW}px) {
    padding: 0;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 36px;

  @media (max-width: ${TABLET_VIEW}px) {
    row-gap: 20px;
  }
`;

export const TwitterIcon = styled(Icon)`
  white-space: nowrap;
  width: 50px;
  height: 40px;

  @media (max-width: ${MOBILE_VIEW}px) {
    margin-bottom: 0px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const TweetButton = styled(ButtonTemplate)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${elementHeight};
  border-radius: 28px;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.size};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    opacity: ${({ theme }) => theme.animation.buttonHoverOpacity};
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 38px;
  width: 100%;
`;
