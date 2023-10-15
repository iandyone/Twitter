import { DEFAULT_GAP } from '@constants/variables';
import { Icon, TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${DEFAULT_GAP};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.link};
  }
`;

export const OptionIcon = styled(Icon)``;

export const OptionTitle = styled(TitleTemplate)`
  font-size: ${({ theme }) => theme.font.size};
  font-weight: ${({ theme }) => theme.font.medium};
  transition: none;
  color: inherit;
`;
