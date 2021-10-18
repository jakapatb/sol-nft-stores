import React from 'react'
import styled from '@emotion/styled'

const Content = styled.footer`
	text-align: center;
`
export const Footer: React.FC = () => {
	return (
		<Content>
			<p>Develop & Design With 💚 </p>
			<p>© 2021 Robert-X. All rights reserved.</p>
		</Content>
	)
}
