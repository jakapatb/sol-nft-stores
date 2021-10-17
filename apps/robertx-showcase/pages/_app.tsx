import { AppProps } from 'next/app'
import Head from 'next/head'

function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Welcome to robert-xnft!</title>
				<style>
					{`
				body{
					margin: 0;
					display: flex;
					justify-content: center;
				}
				`}
				</style>
			</Head>
			<div className="app">
				<main>
					<Component {...pageProps} />
				</main>
			</div>
		</>
	)
}

export default CustomApp
