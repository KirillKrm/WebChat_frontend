/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/*<Component {...pageProps} />*/}
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </>
  )
}

//export default MyApp

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
})
