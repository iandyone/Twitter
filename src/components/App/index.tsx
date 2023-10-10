import { Layout } from '@components/Layout';
import { AppRoutes } from '@constants/variables';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { FeedPage } from '@pages/feed';
import { HomePage } from '@pages/home';
import { LoginPage } from '@pages/login';
import { ProfilePage } from '@pages/profile';
import { SignInPage } from '@pages/signIn';
import { SignUpPage } from '@pages/signUp';
import { setBurger, setSelectDay, setSelectMonth, setSelectYear } from '@store/reducers/app';
import { GlobalStyles } from '@styles';
import { theme } from '@styles/theme';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

export const Wrapper = styled.section``;

export const App: FC = () => {
  const { theme: currentTheme } = useSelectorTyped((store) => store.app);
  const { burger, selectDay, selectMonth, selectYear } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    if (burger) dispatch(setBurger(false));
    if (selectDay) dispatch(setSelectDay(false));
    if (selectMonth) dispatch(setSelectMonth(false));
    if (selectYear) dispatch(setSelectYear(false));
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyles />
      <Wrapper onClick={handlerOnClick}>
        <Routes>
          <Route path={AppRoutes.HOME} element={<HomePage />} />
          <Route path={AppRoutes.SIGNIN} element={<SignInPage />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.REGISTRATION} element={<SignUpPage />} />
          <Route path='/page' element={<Layout />}>
            <Route path={AppRoutes.page.FEED} element={<FeedPage />} />
            <Route path={AppRoutes.page.PROFILE} element={<ProfilePage />} />
          </Route>
        </Routes>
      </Wrapper>
    </ThemeProvider>
  );
};
