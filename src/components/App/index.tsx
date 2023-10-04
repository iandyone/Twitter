import { AppRoutes } from '@appTypes/enums';
import { LoginPage } from '@pages/Login';
import { SignInPage } from '@pages/SignIn';
import { SignUpPage } from '@pages/SignUp';
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
