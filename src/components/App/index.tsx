import { Layout } from '@components/Layout';
import { AppRoutes } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { FeedPage } from '@pages/feed';
import { HomePage } from '@pages/home';
import { LoginPage } from '@pages/login';
import { ProfilePage } from '@pages/profile';
import { SignInPage } from '@pages/signIn';
import { SignUpPage } from '@pages/signUp';
import { GlobalStyles } from '@styles';
import { theme } from '@styles/theme';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export const App: FC = () => {
  const { theme: currentTheme } = useSelectorTyped((store) => store.app);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyles />
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
    </ThemeProvider>
  );
};
