import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/styles/global'
import { defaultTheme } from '@/styles/theme'
import { Router } from '@routes/Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppProvider } from './context'

export function App() {
  const titulo = 'aasdasdas';
  document.title = titulo;

  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer position="top-right" />
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  )
}
