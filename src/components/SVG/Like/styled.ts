import styled from 'styled-components';

export const Container = styled.div`
  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animation.transition};
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    transform: ${({ theme }) => theme.animation.transformActive};
  }
`;
