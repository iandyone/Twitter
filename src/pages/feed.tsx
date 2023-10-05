import { BurgerMenu } from '@components/BurgerMenu';
import { Header } from '@components/Header';
import { AppRoutes } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const FeedPage: FC = () => {
  const { isAuthorized } = useSelectorTyped((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(AppRoutes.HOME);
    }
  });

  return (
    <Container>
      <Header title='Home' />
      <div>Feed Page</div>
      <BurgerMenu />
    </Container>
  );
};
