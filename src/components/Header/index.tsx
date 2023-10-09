import { ThemeButton } from '@components/ThemeButton';
import { FC, memo } from 'react';

import { Container, Title } from './styled';
import { IHeaderProps } from './types';

export const HeaderComponent: FC<IHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ThemeButton />
    </Container>
  );
};

export const Header = memo(HeaderComponent);
