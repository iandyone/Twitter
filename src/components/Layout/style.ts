import { TABLET_VIEW } from '@constants/variables';
import styled from 'styled-components';

export const Body = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr 300px;

  @media (max-width: 1400px) {
    grid-template-columns: 250px 1fr 250px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 200px 1fr 250px;
  }

  @media (max-width: ${TABLET_VIEW}px) {
    display: flex;
    width: 100%;
  }
`;

export const Main = styled.main`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;
  border-bottom: none;
  padding: 20px;

  @media (max-width: ${TABLET_VIEW}px) {
    display: flex;
    width: 100%;
    border: none;
  }
`;
