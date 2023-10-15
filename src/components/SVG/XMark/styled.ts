import styled from 'styled-components';

export const Container = styled.div`
  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animations.transition};
  }

  &:active {
    transition: ${({ theme }) => theme.animations.transition};
    transform: ${({ theme }) => theme.animations.transformActive};
  }
`;
