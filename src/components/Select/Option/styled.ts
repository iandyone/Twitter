import styled from 'styled-components';

export const OptionElement = styled.li`
  padding: 16px 20px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgApp};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: ${({ theme }) => theme.animation.transition};
  border-top: none;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: ${({ theme }) => theme.animation.transition};
    color: ${({ theme }) => theme.colors.borderHover};
  }

  &:not(last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;
