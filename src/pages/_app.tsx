import Head from "next/head";
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@/theme'
import { GlobalStyle } from '@/theme/global'

import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marcelo Acevedo - SSr Fullstack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <Navbar/>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}