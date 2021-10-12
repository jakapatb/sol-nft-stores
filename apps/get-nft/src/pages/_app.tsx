import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import dynamic from 'next/dynamic'

const ConfigProvider = dynamic(() => import('../providers/ConfigProvider'), {
  ssr: false
})

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to example!</title>
      </Head>

      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  )
}

export default CustomApp
