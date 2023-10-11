import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import { InputTemplate } from '@styles';
import styled from 'styled-components';

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.error};
  transition: ${({ theme }) => theme.animation.transition};
  font-size: 14px;
  line-height: 120%;
  height: 14px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const Input = styled(InputTemplate).attrs(({ type }) => ({
  type,
}))`
  width: 100%;
  padding: 24px ${DEFAULT_GAP};

  @media (max-width: ${Viewposts.MOBILE}px) {
    padding: 12px 10px;
  }
`;
