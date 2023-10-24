import { ButtonTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.gap.sm};
  width: 100%;
`;

export const LogOutButton = styled(ButtonTemplate)`
  height: 55px;
  background: ${({ theme }) => theme.colors.buttonBgSecondary};
  transition: ${({ theme }) => theme.animations.transition};
  width: 100%;
  flex: 1 1 auto;

  &:hover {
    opacity: ${({ theme }) => theme.animations.opacity};
  }
`;
