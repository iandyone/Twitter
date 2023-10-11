import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import { TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  height: 100%;
`;

export const Title = styled(TitleTemplate)`
  font-size: 24px;
  margin-bottom: ${DEFAULT_GAP};
  text-align: center;

  @media (max-width: ${Viewposts.MOBILE}px) {
    font-size: 20px;
    margin-bottom: 6px;
  }
`;
