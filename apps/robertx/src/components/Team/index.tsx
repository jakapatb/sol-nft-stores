import styled from '@emotion/styled'
import React from 'react'
import Image from 'next/image'
import { Title } from '../Title'
import { breakpoint } from '../../styles/breakpoint'
import nftPng from '../../assets/nft.png'
const Frame = styled.div`
	border-radius: 2rem;
	background: var(--black);
	border: 0.5rem solid var(--black);
	width: 300px;
	height: 300px;
	overflow: hidden;
	position: relative;
`
const Member = styled.div`
	display: grid;
	grid-auto-rows: max-content;
	justify-content: center;
	text-align: center;
	h3 {
		line-height: 1;
		font-size: 2rem;
	}
	p {
		margin: 0;
	}
`
const Content = styled.div`
	margin: 4rem 0;

	@media ${breakpoint.desktop} {
		display: flex;
		justify-content: space-between;
	}
`
export const Team: React.FC = () => {
	return (
		<div>
			<Title>MEET THE TEAM</Title>
			<Content>
				<Member>
					<Frame>
						<Image src={nftPng} width={300} height={300} alt="NFT" placeholder="blur" />
					</Frame>
					<h3>Eugene Rice</h3>
					<p>Project manager & Developer</p>
					{/* <p>Twiiter</p> */}
				</Member>
				<Member>
					<Frame>
						<Image src={nftPng} width={300} height={300} alt="NFT" placeholder="blur" />
					</Frame>
					<h3>Eugene Rice</h3>
					<p>Art & Design</p>
					{/* <p>Twiiter</p> */}
				</Member>
				<Member>
					<Frame>
						<Image src={nftPng} width={300} height={300} alt="NFT" placeholder="blur" />
					</Frame>
					<h3>Eugene Rice</h3>
					<p>Marketing & Admin</p>
					{/* <p>Twiiter</p> */}
				</Member>
			</Content>
		</div>
	)
}
