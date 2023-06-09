import Head from "next/head";
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@/theme'
import { GlobalStyle } from '@/theme/global'

import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import RightLayout from "@/components/RightLayout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marcelo Acevedo - SSr Fullstack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <Navbar/>
          <RightLayout>
            <Component {...pageProps} />
          </RightLayout>
        </Layout>
      </ThemeProvider>
    </>
  )
}