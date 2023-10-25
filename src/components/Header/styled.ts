import { Viewports } from '@appTypes/enums';
import styled from 'styled-components';

const { TABLET } = Viewports;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${TABLET}) {
    padding: 0 ${({ theme }) => theme.spaces.gap.ss};
  }

  @media (max-width: ${TABLET}) {
    padding-right: 40px;
    padding-left: 0;
  }
`;
