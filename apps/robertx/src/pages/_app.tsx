import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import './style.css'
import dynamic from 'next/dynamic'
import { Layout } from '../components/layout'
import { createTheme, ThemeProvider } from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../styles/emotionCache'

const clientSideEmotionCache = createEmotionCache()
const ConfigProvider = dynamic(() => import('../providers/ConfigProvider'), {
	ssr: false
})
const theme = createTheme({
	palette: {
		mode: 'dark'
	}
})

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}
function CustomApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>RobertX NFT</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
			{/* <ConfigProvider>
      <Component {...pageProps} />
      </ConfigProvider> */}
		</CacheProvider>
	)
}

export default CustomApp
