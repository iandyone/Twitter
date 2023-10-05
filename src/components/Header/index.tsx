import { ThemeButton } from '@components/ThemeButton';
import { TitleTemplate } from '@styles';
import { FC } from 'react';
import styled from 'styled-components';

export const Title = styled(TitleTemplate)``;

interface IHeaderProps {
  title: string;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

export const Header: FC<IHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ThemeButton />
    </Container>
  );
};
