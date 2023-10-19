import { Viewposts } from '@appTypes/enums';
import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  display: none;

  @media (max-width: ${Viewposts.TABLET}px) {
    display: block;
    position: absolute;
    top: 22px;
    right: 20px;
  }
`;

export const BurgerButton = styled.button`
  position: relative;
  z-index: 160;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const BurgerLine = styled.span<{ $isOpen: boolean }>`
  display: block;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.burgerLine};
  transition: ${({ theme }) => theme.animations.transition};

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -6px);
      }
    `}
`;
