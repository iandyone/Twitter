import { Viewports } from '@appTypes/enums';
import { TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${Viewports.TABLET}px) {
    padding: 0 ${({ theme }) => theme.spaces.gap.ss};
  }

  @media (max-width: ${Viewports.TABLET}px) {
    padding-right: 40px;
    padding-left: 0;
  }
`;

export const Title = styled(TitleTemplate)``;
