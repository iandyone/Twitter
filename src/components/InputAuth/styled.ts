import { InputTemplate } from '@styles';
import styled from 'styled-components';

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  line-height: 120%;
  height: 14px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Input = styled(InputTemplate).attrs(({ type }) => ({
  type,
}))`
  width: 100%;
  padding: 24px 20px;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`;
