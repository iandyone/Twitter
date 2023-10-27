import { Theme } from '@appTypes/types';
import styled from 'styled-components';

const TOGGLER_SIZE = '27px';
const SWITCHER_SIZE = '28px';

export const Switcher = styled.div`
  width: 50px;
  height: ${SWITCHER_SIZE};
  border-radius: ${SWITCHER_SIZE};
  position: relative;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.themeButtonBorder};
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    cursor: pointer;
  }
`;

export const Toggler = styled.div<{ $theme: Theme }>`
  width: ${TOGGLER_SIZE};
  height: ${TOGGLER_SIZE};
  border-radius: 50%;
  position: absolute;
  left: -2px;
  top: -1px;
  border: 2px solid ${({ theme }) => theme.colors.themeButtonBorder};
  transform: translateX(${({ $theme }) => ($theme === 'light' ? '0' : '24px')});
  transition: transform 0.2s ease;
  transition: ${({ theme }) => theme.animations.transition};
`;
