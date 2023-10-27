import { ButtonTemplate, LabelTemplate, TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spaces.gap.ss};
`;

export const Title = styled(TitleTemplate)`
  font-size: ${({ theme }) => theme.font.size.l};
  text-align: center;
`;

export const SaveButton = styled(ButtonTemplate)`
  width: 68px;
  height: 32px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.gap.sm};
`;

export const Label = styled(LabelTemplate)`
  margin-bottom: 6px;
  display: block;
  line-height: 120%;
  height: 14px;
  padding-left: 2px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animations.transition};
`;
