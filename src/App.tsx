import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/global'
import { defaultTheme } from '@/styles/theme'
import { Router } from '@routes/Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppProvider } from './context'
import { Loading } from './components/Loading/loading'

type TenantData = {
  name: string
  page_title: string
  icon: string
  primary_color_identity: string
  secondary_color_identity: string
  status: string
  attachment_logo_colorful: string
  attachment_logo_white: string
}

export function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tenantData, setTenantData] = useState<TenantData | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentHost = window.location.hostname
        const segment = currentHost.split('.')[1]

        // const apiURL = `https://api-${segment}-confrapag.stalopay.com.br/api`;

        const apiURL = `https://api-pagueassim-confrapag.stalopay.com.br/api`

        const response = await axios.get(apiURL)
        const pageTitle = response.data.tenant.page_title
        document.title = pageTitle
        setTenantData(response.data.tenant)
        const favicon = document.createElement('link')
        favicon.rel = 'icon'
        favicon.href = response.data.tenant.icon
        document.head.appendChild(favicon)
      } catch (error) {
        console.error('Error fetching page title:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <AppProvider tenantData={tenantData as TenantData}>
      {isLoading ? (
        <Loading />
      ) : (
        <ThemeProvider theme={defaultTheme}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <Router />
          <GlobalStyle />
        </ThemeProvider>
      )}
    </AppProvider>
  )
}
