import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
	margin-top: -5rem;
	display: grid;
	height: 40rem;
	text-align: center;
	margin-bottom: 35rem;
`
const Content = styled.div`
	margin: auto;
	h1 {
		font-size: 56px;
		font-weight: 500;
	}
	p {
		margin: auto;
		font-size: 18px;
		line-height: 1.75;
		max-width: 800px;
	}
`
const VDOFilter = styled.div`
	width: 98.75vw;
	height: 62.5rem;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: radial-gradient(50% 75% at 50% 25%, rgba(205, 255, 255, 0) 10%, var(--black) 100%);
	/* background: linear-gradient(180deg, rgba(205, 255, 255, 0) 0%, var(--black) 75%); */
	z-index: -1;
	&:before {
		content: '';
		position: absolute;
		background: linear-gradient(0deg, rgba(205, 255, 255, 0) 0%, var(--black) 75%);
		height: 10rem;
		left: 0;
		right: 0;
		top: 100%;
		z-index: -1;
	}
`
const BackgroundVDO = styled.video`
	opacity: 50%;
	width: 98.75vw;
	height: 62.5rem;
	object-fit: cover;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: -2;
`

export const Hero: React.FC = () => {
	return (
		<>
			<Wrapper>
				<Content>
					<h1>
						Robert-X <br />
						2088 Unique Generative NFT
						<br />
						on Solana Blockchain
					</h1>
					{/* <p>
					Est itaque unde ratione. Quasi minus voluptatem eveniet. Recusandae ipsum molestiae numquam libero deserunt
					inventore incidunt aperiam voluptatem.
				</p> */}
				</Content>
				<VDOFilter />
				<BackgroundVDO loop autoPlay>
					<source src="/BG-Dark.mp4" type="video/mp4" />
				</BackgroundVDO>
			</Wrapper>
		</>
	)
}
