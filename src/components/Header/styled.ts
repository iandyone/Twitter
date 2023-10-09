import { TABLET_VIEW } from '@constants/variables';
import { TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: ${TABLET_VIEW}px) {
    padding-right: 40px;
  }
  @media (max-width: ${TABLET_VIEW}px) {
    padding-left: 0px;
  }
`;

export const Title = styled(TitleTemplate)``;
