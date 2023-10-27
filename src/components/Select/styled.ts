import { LabelTemplate } from '@styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex: 1 1 auto;
  z-index: 10;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const Title = styled.h3<{ $isActive?: boolean; $isValid?: boolean }>`
  width: 100%;
  padding: 16px 12px;
  border-radius: 6px;
  position: relative;
  font-size: ${({ theme }) => theme.font.size.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.sm};
  transition: ${({ theme }) => theme.animations.transition};

  ${({ $isValid }) =>
    $isValid &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.error};
      transition: ${({ theme }) => theme.animations.transition};
    `}

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animations.transition};
    border-color: ${({ theme }) => theme.colors.link};
  }
`;

export const IconContainer = styled.div<{ $isActive?: boolean; $isValid?: boolean }>`
  position: absolute;
  right: ${({ theme }) => theme.spaces.gap.ss};
  top: 40%;
  width: 28px;
  height: 28px;
  transition: ${({ theme }) => theme.animations.transition};
  width: 18px;
  height: 11px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: rotate(180deg);
      transition: ${({ theme }) => theme.animations.transition};
    `};
`;

export const Options = styled.ul`
  width: 100%;
  background: ${({ theme }) => theme.colors.bgApp};
  max-height: 250px;
  max-height: 100px;
`;

export const Label = styled(LabelTemplate)`
  margin-bottom: 6px;
  line-height: 120%;
  height: 14px;
  padding-left: 2px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animations.transition};
  display: block;
`;
