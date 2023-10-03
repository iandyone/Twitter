import { LoginPage } from '@pages/Login';
import { GlobalStyles } from '@styles';
import { theme } from '@styles/theme';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      {/* <SignInPage /> */}
      <LoginPage />
    </ThemeProvider>
  );
};
