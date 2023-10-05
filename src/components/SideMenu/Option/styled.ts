import { Title } from '@components/SignIn/styled';
import { Icon } from '@styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.link};
    transition: ${({ theme }) => theme.animation.transition};
  }
`;

export const OptionIcon = styled(Icon)``;

export const OptionTitle = styled(Title)`
  font-size: ${({ theme }) => theme.font.size};
  font-weight: ${({ theme }) => theme.font.medium};
  transition: ${({ theme }) => theme.animation.transition};
  color: inherit;
`;
