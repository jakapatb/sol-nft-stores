import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 4rem;
`
const Title = styled.h1`
	font-size: 48px;
`

export const Overview: React.FC = () => {
	return (
		<Container>
			<div>
				<Title>Overview</Title>
				<p>
					RobertX is a young guy from the year 2088 who is compelled to wear a dust filter at all times because the
					weather and living conditions have led people to disbelieve the reality of a God-created body. The youthful
					RobertX, on the other hand, will continue to remedy the errors that have brought the world to this point.
				</p>
			</div>
			<div></div>
		</Container>
	)
}
