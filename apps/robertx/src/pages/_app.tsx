import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import './style.css'
import dynamic from 'next/dynamic'
import { Layout } from '../components/layout'
import { AnimateSharedLayout } from 'framer-motion'

const ConfigProvider = dynamic(() => import('../providers/ConfigProvider'), {
	ssr: false
})

function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Robert-X NFT</title>
			</Head>
			<AnimateSharedLayout type="crossfade">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AnimateSharedLayout>
			{/* <ConfigProvider>
      <Component {...pageProps} />
      </ConfigProvider> */}
		</>
	)
}

export default CustomApp
