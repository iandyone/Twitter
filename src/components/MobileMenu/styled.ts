import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import styled, { css } from 'styled-components';

export const MenuContent = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 150;
  top: 0;
  right: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.burgerBg};
  transform: translateX(100%);
  transition: ${({ theme }) => theme.animation.transition};
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-left: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${Viewposts.MOBILE}px) {
    width: 100%;
    display: block;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: translateX(0%);
    `};
`;

export const MenuOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 10px;
  row-gap: ${DEFAULT_GAP};
  padding: ${DEFAULT_GAP};

  @media (max-width: ${Viewposts.MOBILE}px) {
    align-items: initial;
  }
`;

export const AccountContainer = styled.div`
  width: 100%;
`;
