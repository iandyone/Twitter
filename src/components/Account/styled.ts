import { ButtonTemplate } from '@styles';
import styled from 'styled-components';

const width = '100%';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.gap.sm};
  width: ${width};
`;

export const LogOutButton = styled(ButtonTemplate)`
  height: 55px;
  background: ${({ theme }) => theme.colors.buttonBgSecondary};
  transition: ${({ theme }) => theme.animations.transition};
  width: ${width};
  flex: 1 1 auto;

  &:hover {
    opacity: ${({ theme }) => theme.animations.opacity};
  }
`;
