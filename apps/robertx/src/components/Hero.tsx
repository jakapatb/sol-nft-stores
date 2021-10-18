import React from 'react'
import Image from 'next/image'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import styled from '@emotion/styled'

const Wrapper = styled.div`
	display: grid;
	height: 60rem;
	text-align: center;
`
const Content = styled.div`
	margin: auto;
	h1 {
		font-size: 56px;
	}
	p {
		margin: auto;
		font-size: 18px;
		line-height: 1.75;
		max-width: 800px;
	}
`

export const Hero: React.FC = () => {
	return (
		<Wrapper>
			<Content>
				<h1>Robert-X Est ea soluta placeat omnis.</h1>
				<p>
					Est itaque unde ratione. Quasi minus voluptatem eveniet. Recusandae ipsum molestiae numquam libero deserunt
					inventore incidunt aperiam voluptatem.
				</p>
			</Content>
		</Wrapper>
	)
}
