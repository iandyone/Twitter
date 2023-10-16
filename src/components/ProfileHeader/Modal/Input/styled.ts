import { Viewposts } from '@appTypes/enums';
import { InputTemplate, LabelTemplate } from '@styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const Label = styled(LabelTemplate)`
  line-height: 120%;
  height: 14px;
  padding-left: 2px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animations.transition};
`;

export const Inputelement = styled(InputTemplate).attrs(({ type }) => ({
  type,
}))<{ $error: boolean }>`
  width: 100%;
  padding: 16px 12px;
  font-size: 14px;
  transition: ${({ theme }) => theme.animations.transition};
  background: ${({ theme }) => theme.colors.inputBg};

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
    `}

  @media (max-width: ${Viewposts.MOBILE}px) {
    padding: 12px 10px;
  }
`;
