import styled from 'styled-components';

export const OptionElement = styled.li`
  padding: 16px ${({ theme }) => theme.spaces.gap.ss};
  width: 100%;
  background: ${({ theme }) => theme.colors.bgApp};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: ${({ theme }) => theme.animations.transition};
  border-top: none;

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animations.transition};
    opacity: ${({ theme }) => theme.animations.opacity};
    color: ${({ theme }) => theme.colors.borderHover};
  }

  &:not(last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;
