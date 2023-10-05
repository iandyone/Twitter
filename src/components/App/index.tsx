import { AppRoutes } from '@appTypes/enums';
import { FeedPage } from '@pages/feed';
import { LoginPage } from '@pages/login';
import { ProfilePage } from '@pages/profile';
import { SignInPage } from '@pages/signIn';
import { SignUpPage } from '@pages/signUp';
import { GlobalStyles } from '@styles';
import { theme } from '@styles/theme';
import { FC, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { IRoute } from './types';

export const App: FC = () => {
  const RoutesList: IRoute[] = useMemo(getRoutesList, []);

  function getRoutesList() {
    return [
      { path: AppRoutes.HOME, element: SignInPage },
      { path: AppRoutes.LOGIN, element: LoginPage },
      { path: AppRoutes.REGISTRATION, element: SignUpPage },
      { path: AppRoutes.FEED, element: FeedPage },
      { path: AppRoutes.PROFILE, element: ProfilePage },
    ];
  }

  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <Routes>
        {RoutesList.map(({ path, element: Element }) => (
          <Route path={path} element={<Element />} key={path} />
        ))}
      </Routes>
    </ThemeProvider>
  );
};
