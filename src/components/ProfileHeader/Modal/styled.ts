import { DEFAULT_GAP } from '@constants/variables';
import { ButtonTemplate, TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${DEFAULT_GAP};
`;

export const Title = styled(TitleTemplate)`
  font-size: 24px;
  text-align: center;
`;

export const SaveButton = styled(ButtonTemplate)`
  width: 68px;
  height: 32px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
