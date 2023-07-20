import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/global';
import { defaultTheme } from '@/styles/theme';
import { Router } from '@routes/Router';
import { LoginProvider } from './context/user.login';


export function App() {
  return (
    <LoginProvider>
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
    </LoginProvider>
  );
}
