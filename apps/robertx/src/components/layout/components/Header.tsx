import styled from '@emotion/styled'
import React from 'react'
import { Button, Container } from '@mui/material'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Wrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 5rem;
`
const LogoWrapper = styled(motion.div)`
	position: relative;
	width: 12rem;
`
const Stick = styled(motion.header)`
	position: sticky;
	z-index: 50;
	top: 0;
	/* background: var(--black); */
`
// const YRangeTrigger = [0, 512]
export const Header: React.FC = () => {
	return (
		<Stick>
			<Container maxWidth="lg">
				<Wrapper>
					<LogoWrapper>
						<Image src="/logo.png" alt="Robert-X Logo" width={3894} height={1227} layout="responsive" />
					</LogoWrapper>

					<div>
						<Button variant="contained">Mint</Button>
					</div>
				</Wrapper>
			</Container>
		</Stick>
	)
}
