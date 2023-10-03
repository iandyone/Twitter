import { SignUpPage } from '@pages/SignUp';
import { GlobalStyles } from '@styles';
import { theme } from '@styles/theme';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <SignUpPage />
      {/* <LoginPage /> */}
      {/* <SignInPage /> */}
    </ThemeProvider>
  );
};
