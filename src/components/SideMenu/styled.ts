import { Viewports } from '@appTypes/enums';
import { ButtonTemplate, Icon, SidesTemplate } from '@styles';
import styled from 'styled-components';

const elementHeight = '55px';

export const Wrapper = styled.aside`
  position: relative;
  max-width: 300px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${Viewports.DESKTOP_MEDIUM}px) {
    width: 100%;
    max-width: none;
  }
`;

export const Container = styled(SidesTemplate)`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.gap.ss} ${({ theme }) => theme.spaces.gap.ss}
    ${({ theme }) => theme.spaces.gap.ss} 0;
  height: 100vh;
  position: fixed;

  @media (max-width: ${Viewports.DESKTOP}px) {
    max-width: none;
    width: 250px;
    align-items: flex-start;
  }
  @media (max-width: ${Viewports.DESKTOP_MEDIUM}px) {
    width: 200px;
  }
  @media (max-width: ${Viewports.TABLET}px) {
    position: static;
    height: auto;
    justify-content: initial;
    align-items: center;
    width: 200px;
    row-gap: ${({ theme }) => theme.spaces.gap.ml};
    padding-right: 10px;
    width: 100%;
  }
  @media (max-width: ${Viewports.MOBILE}px) {
    padding: 0;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 36px;

  @media (max-width: ${Viewports.TABLET}px) {
    row-gap: ${({ theme }) => theme.spaces.gap.ss};
  }
`;

export const TwitterIcon = styled(Icon)`
  white-space: nowrap;
  width: 50px;
  height: 40px;

  @media (max-width: ${Viewports.MOBILE}px) {
    margin-bottom: 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.gap.ml};
`;

export const TweetButton = styled(ButtonTemplate)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${elementHeight};
  border-radius: 28px;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.size.sm};
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    opacity: ${({ theme }) => theme.animations.opacity};
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 38px;
  width: 100%;
`;
