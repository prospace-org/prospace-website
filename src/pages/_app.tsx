import React, { useCallback, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { BolioUIProvider, CssBaseline } from '@bolio-ui/core'
import { Provider as ReduxProvider } from 'react-redux'
import { AuthProvider } from 'src/contexts/JWTContext'
import { store } from '../redux/store'
import {
  SettingsContext,
  themes,
  ThemeType
} from 'src/contexts/SettingsContext'
import { Favicon, Navigation } from 'src/components'
import SEO from '../../next-seo.config'

import { grayTheme } from 'src/theme'

function App({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = useState<ThemeType>('gray')

  useEffect(() => {
    document.documentElement.removeAttribute('style')
    document.body.removeAttribute('style')

    const theme = window.localStorage.getItem('theme') as ThemeType
    if (themes.includes(theme)) setThemeType(theme)
  }, [])

  const switchTheme = useCallback((theme: ThemeType) => {
    setThemeType(theme)
    if (typeof window !== 'undefined' && window.localStorage)
      window.localStorage.setItem('theme', theme)
  }, [])

  return (
    <>
      <Head>
        <title>ProSpace - Seu sonho começa aqui</title>
        <meta
          name="description"
          content="A ProSpace é uma plataforma desenvolvida para conectar, relacionar e profissionalizar o mercado do esporte no Brasil."
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Favicon />
      </Head>
      <AuthProvider>
        <ReduxProvider store={store}>
          <BolioUIProvider themes={[grayTheme]} themeType={themeType}>
            <SettingsContext.Provider value={{ themeType, switchTheme }}>
              <DefaultSeo {...SEO} />
              <Navigation />
              <CssBaseline />
              <Component {...pageProps} />
            </SettingsContext.Provider>
          </BolioUIProvider>
        </ReduxProvider>
      </AuthProvider>
    </>
  )
}

export default App
