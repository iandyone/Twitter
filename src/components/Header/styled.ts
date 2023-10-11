import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import { TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${Viewposts.TABLET}px) {
    padding: 0px ${DEFAULT_GAP};
  }

  @media (max-width: ${Viewposts.TABLET}px) {
    padding-right: 40px;
    padding-left: 0px;
  }
`;

export const Title = styled(TitleTemplate)``;
