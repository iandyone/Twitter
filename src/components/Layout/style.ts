import { Viewposts } from '@appTypes/enums';
import styled from 'styled-components';

export const Body = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr 300px;

  @media (max-width: ${Viewposts.DESKTOP}px) {
    grid-template-columns: 250px 1fr 250px;
  }

  @media (max-width: ${Viewposts.DESKTOP_MEDIUM}px) {
    grid-template-columns: 200px 1fr 250px;
  }

  @media (max-width: ${Viewposts.TABLET}px) {
    display: flex;
    width: 100%;
  }
`;

export const Main = styled.main`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;
  border-bottom: none;

  @media (max-width: ${Viewposts.TABLET}px) {
    display: flex;
    width: 100%;
    border: none;
  }
`;
