import { Viewports } from '@appTypes/enums';
import { InputTemplate } from '@styles';
import styled from 'styled-components';

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.error};
  transition: ${({ theme }) => theme.animations.transition};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 120%;
  height: 14px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.gap.xs};
`;

export const Input = styled(InputTemplate).attrs(({ type }) => ({
  type,
}))`
  width: 100%;
  padding: 24px ${({ theme }) => theme.spaces.gap.ss};
  background: ${({ theme }) => theme.colors.inputBg};

  @media (max-width: ${Viewports.MOBILE}px) {
    padding: 12px 10px;
  }
`;
