import { TABLET_VIEW } from '@constants/variables';
import { ButtonTemplate, Icon, SidesTemplate } from '@styles';
import styled from 'styled-components';

const elementHeight = '55px';

export const Container = styled(SidesTemplate)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  justify-content: space-between;
  min-height: auto;
  padding: 20px 20px 20px 0;

  @media (max-width: 1400px) {
    max-width: none;
    align-items: flex-start;
  }
  @media (max-width: ${TABLET_VIEW}px) {
    justify-content: initial;
    align-items: center;
    row-gap: 30px;
    padding-right: 10px;
  }

  @media (max-width: 480px) {
    padding: 20px 0px;
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

  @media (max-width: 480px) {
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
