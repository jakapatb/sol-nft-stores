import styled from '@emotion/styled'
import React, { useState } from 'react'
import { IconButton, Container, List, ListItem, ListItemText } from '@mui/material'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SwipeableDrawer } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
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
	background: var(--black-75);
`
// const YRangeTrigger = [0, 512]
export const Header: React.FC = () => {
	const [visible, setVisible] = useState(false)

	return (
		<Stick>
			<Container maxWidth="lg">
				<Wrapper>
					<LogoWrapper>
						<Image src="/logo.png" alt="RobertX Logo" width={3894} height={1227} layout="responsive" />
					</LogoWrapper>

					<IconButton onClick={() => setVisible((prev) => !prev)}>
						<MenuIcon fontSize="large" />
					</IconButton>
					<SwipeableDrawer
						anchor={'right'}
						open={visible}
						onClose={() => setVisible(false)}
						onOpen={() => setVisible(true)}
					>
						<Box role="presentation" sx={{ width: 256 }}>
							<List>
								{['Overview', 'Rarity', 'FAQ', 'Team'].map((text) => (
									<ListItem button key={text}>
										<ListItemText primary={text} />
									</ListItem>
								))}
							</List>
						</Box>
					</SwipeableDrawer>
				</Wrapper>
			</Container>
		</Stick>
	)
}
