import { Viewports } from '@appTypes/enums';
import { ButtonTemplate, TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

export const Title = styled(TitleTemplate)`
  font-size: ${({ theme }) => theme.font.size.ml};
  text-align: center;

  @media (max-width: ${Viewports.MOBILE}px) {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  column-gap: ${({ theme }) => theme.spaces.gap.ss};

  @media (max-width: ${Viewports.MOBILE}px) {
    max-width: none;
  }
`;

export const Button = styled(ButtonTemplate)`
  height: 46px;
  width: 100%;
  max-width: 185px;

  @media (max-width: ${Viewports.MOBILE}px) {
    max-width: none;
    height: 38px;
  }
`;
