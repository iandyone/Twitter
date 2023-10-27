import { Viewports } from '@appTypes/enums';
import { ButtonTemplate, TitleTemplate } from '@styles';
import styled from 'styled-components';

const { MOBILE } = Viewports;
const size = '100%';

export const Container = styled.div`
  width: ${size};
  height: ${size};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

export const Title = styled(TitleTemplate)`
  font-size: ${({ theme }) => theme.font.size.ml};
  text-align: center;

  @media (max-width: ${MOBILE}) {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  width: ${size};
  column-gap: ${({ theme }) => theme.spaces.gap.ss};

  @media (max-width: ${MOBILE}) {
    max-width: none;
  }
`;

export const Button = styled(ButtonTemplate)`
  height: 46px;
  width: ${size};
  max-width: 185px;

  @media (max-width: ${MOBILE}) {
    max-width: none;
    height: 38px;
  }
`;
