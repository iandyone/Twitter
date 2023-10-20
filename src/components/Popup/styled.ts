import { Viewports } from '@appTypes/enums';
import { css, styled } from 'styled-components';

export const PopupElement = styled.div<{ $isVisible: boolean }>`
  pointer-events: none;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: relative;
  z-index: 100;
  pointer-events: auto;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      position: fixed;

      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.popupBg};
    `}
`;

export const Content = styled.div<{ $isVisible: boolean }>`
  transition: ${({ theme }) => theme.animations.transition};
  opacity: 0;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      border-radius: 30px;
      width: 70vw;
      transition: ${({ theme }) => theme.animations.transition};
      border: 1px solid ${({ theme }) => theme.colors.modalBorder};
      background: ${({ theme }) => theme.colors.modalBg};
      color: ${({ theme }) => theme.colors.text};
      padding: ${({ theme }) => theme.spaces.gap.ss};
      display: flex;
      justify-content: center;

      @media (max-width: ${Viewports.TABLET}px) {
        max-height: fit-content;
      }
    `};
`;
