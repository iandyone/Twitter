import { Viewports } from '@appTypes/enums';
import { css, styled } from 'styled-components';

const { TABLET, MOBILE } = Viewports;

export const PopupElement = styled.div<{ $isVisible: boolean }>`
  pointer-events: none;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: relative;
  z-index: 30;
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
      width: 50%;
      transition: ${({ theme }) => theme.animations.transition};
      border: 1px solid ${({ theme }) => theme.colors.modalBorder};
      background: ${({ theme }) => theme.colors.modalBg};
      color: ${({ theme }) => theme.colors.text};
      padding: ${({ theme }) => theme.spaces.gap.ss};
      display: flex;
      justify-content: center;
      position: relative;

      @media (max-width: ${TABLET}) {
        max-height: fit-content;
        width: 70%;
      }

      @media (max-width: ${MOBILE}) {
        max-height: fit-content;
        width: 90%;
      }
    `};
`;

export const CloseButton = styled.div`
  position: absolute;
  right: -50px;
  top: -30px;

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animations.transition};
    border-color: ${({ theme }) => theme.colors.link};
  }

  &:active {
    transition: ${({ theme }) => theme.animations.transition};
    transform: ${({ theme }) => theme.animations.transformActive};
  }

  @media (max-width: ${MOBILE}) {
    right: -10px;
    top: -40px;
  }
`;
