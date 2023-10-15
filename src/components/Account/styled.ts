import { ButtonTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`;

export const LogOutButton = styled(ButtonTemplate)`
  height: 55px;
  background: ${({ theme }) => theme.colors.buttonBg2};
  transition: ${({ theme }) => theme.animations.transition};
  width: 100%;
  flex: 1 1 auto;

  &:hover {
    opacity: ${({ theme }) => theme.animations.opacity};
  }
`;
