import { TitleTemplate } from '@styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.spaces.gap.ss};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.link};
  }
`;

export const OptionTitle = styled(TitleTemplate)<{ $isActive: boolean }>`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.medium};
  transition: none;
  color: inherit;

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.colors.link};
    `}
`;
