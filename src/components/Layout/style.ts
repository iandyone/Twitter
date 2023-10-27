import { Viewports } from '@appTypes/enums';
import styled from 'styled-components';

const { DESKTOP, DESKTOP_MEDIUM, TABLET } = Viewports;

const size = '100%';

export const Body = styled.div`
  height: ${size};
  display: grid;
  grid-template-columns: 300px 1fr 300px;

  @media (max-width: ${DESKTOP}) {
    grid-template-columns: 250px 1fr 250px;
  }

  @media (max-width: ${DESKTOP_MEDIUM}) {
    grid-template-columns: 200px 1fr 250px;
  }

  @media (max-width: ${TABLET}) {
    display: flex;
    width: ${size};
  }
`;

export const Main = styled.main`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;
  border-bottom: none;

  @media (max-width: ${TABLET}) {
    display: flex;
    width: ${size};
    border: none;
  }
`;
