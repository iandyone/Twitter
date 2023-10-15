import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex: 1 1 auto;
  z-index: 10;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const Title = styled.h3<{ $isActive?: boolean; $isValid?: boolean }>`
  width: 100%;
  padding: 24px ${DEFAULT_GAP};
  border-radius: 6px;
  position: relative;
  font-size: ${({ theme }) => theme.font.size};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size};
  transition: ${({ theme }) => theme.animations.transition};

  ${({ $isValid }) =>
    $isValid &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.error};
      transition: ${({ theme }) => theme.animations.transition};
    `}

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animations.transition};
    border-color: ${({ theme }) => theme.colors.link};
  }
`;

export const IconContainer = styled.div<{ $isActive?: boolean; $isValid?: boolean }>`
  position: absolute;
  right: ${DEFAULT_GAP};
  top: 40%;
  width: 28px;
  height: 28px;
  transition: ${({ theme }) => theme.animations.transition};
  width: 18px;
  height: 11px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: rotate(180deg);
      transition: ${({ theme }) => theme.animations.transition};
    `};
`;

export const Options = styled.ul`
  width: 100%;
  background: ${({ theme }) => theme.colors.bgApp};
  max-height: 250px;
  overflow-y: auto;
  position: absolute;

  @media (max-width: ${Viewposts.TABLET_MEDIUM}px) {
    position: static;
  }
`;
