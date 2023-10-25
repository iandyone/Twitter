import { ThemeButton } from '@components/ThemeButton';
import { TitleTemplate } from '@styles';
import { FC, memo } from 'react';

import { Container } from './styled';
import { IHeaderProps } from './types';

export const HeaderComponent: FC<IHeaderProps> = ({ title }) => {
  return (
    <Container>
      <TitleTemplate>{title}</TitleTemplate>
      <ThemeButton />
    </Container>
  );
};

export const Header = memo(HeaderComponent);
