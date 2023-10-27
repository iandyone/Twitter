import { Viewports } from '@appTypes/enums';
import { TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  height: 100%;
`;

export const Title = styled(TitleTemplate)`
  font-size: ${({ theme }) => theme.font.size.l};
  margin-bottom: ${({ theme }) => theme.spaces.gap.ss};
  text-align: center;

  @media (max-width: ${Viewports.MOBILE}) {
    font-size: ${({ theme }) => theme.font.size.ss};
    margin-bottom: 6px;
  }
`;
