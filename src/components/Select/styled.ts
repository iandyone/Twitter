import arrow from '@assets/icons/arrow.svg';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex: 1 1 auto;
  z-index: 10;
`;

export const Title = styled.h3<{ $isActive?: boolean }>`
  width: 100%;
  padding: 24px 20px;
  border-radius: 6px;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animation.transition};
    border-color: ${({ theme }) => theme.colors.link};
  }

  &:before {
    content: '';
    position: absolute;
    right: 20px;
    top: 30%;
    width: 28px;
    height: 28px;
    background: url('${arrow}') center no-repeat;
    transition: ${({ theme }) => theme.animation.transition};

    ${({ $isActive }) =>
    $isActive &&
      css`
        transform: rotate(180deg);
        transition: ${({ theme }) => theme.animation.transition};
      `}
  }
`;

export const Options = styled.ul`
  width: 100%;
  background: ${({ theme }) => theme.colors.bgApp};
  max-height: 250px;
  overflow-y: auto;
  position: absolute;

  @media (max-width: 768px) {
    position: static;
  }
`;
