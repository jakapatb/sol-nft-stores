import React from 'react'
import { Header } from './components/Header'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import { Footer } from './components/Footer'

const Background = styled.div`
	position: fixed;
	z-index: -1;
	top: 0px;
	left: 0px;
	width: 100%;
	overflow: hidden;

	height: -webkit-fill-available;
	background: radial-gradient(50% 50% at 50% 50%, #08d9d6 0%, #252a34 100%);
	opacity: 0.15;
	user-select: none;
	pointer-events: none;
`
const BackgroundA = styled(Background)`
	transform: translate3d(-50%, 20%, 0px);
	background: radial-gradient(50% 50% at 50% 50%, #08d9d6 0%, #252a34 100%);
`
const BackgroundB = styled(Background)`
	transform: translate3d(50%, -20%, 0px);
	background: radial-gradient(50% 50% at 50% 50%, var(--red) 0%, #252a34 100%);
`
export const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<BackgroundA />
			<BackgroundB />
			<Container maxWidth="lg">{children}</Container>
			<Footer />
		</>
	)
}
