import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

const Glitch = keyframes`
	0%{
		text-shadow: 0em 0 0 var(--red-75), -0.025em -0.05em 0 var(--black),
		0.025em 0.05em 0 var(--blue-75);
	}
	14%{
		text-shadow: 0em 0 0 var(--red-75), -0.025em -0.05em 0 var(--black),
		0.025em 0.05em 0 var(--blue-75);
	}
	15%{
		text-shadow: -0.05em -0.025em 0 var(--red-75), 0.025em 0.025em 0 var(--black),
		-0.05em -0.05em 0 var(--blue-75);
	}
	49%{
		text-shadow: -0.05em -0.025em 0 var(--red-75), 0.025em 0.025em 0 var(--black),
		-0.05em -0.05em 0 var(--blue-75);
	}
	50%{
		text-shadow: 0.025em 0.05em 0 var(--red-75), 0.05em 0 0 var(--black),
		0 -0.05em 0 var(--blue-75);
	}
	99%{
		text-shadow: 0.025em 0.05em 0 var(--red-75), 0.05em 0 0 var(--black),
		0 -0.05em 0 var(--blue-75);
	}
	100%{
		text-shadow: -0.025em 0 0 var(--red-75), -0.025em -0.025em 0 var(--black),
		-0.025em -0.05em 0 var(--blue-75);
	}
`

const Text = styled.h1`
	animation: ${Glitch} 375ms infinite;
	text-shadow: 0.05em 0 0 var(--red-75), -0.025em -0.05em 0 var(--black), 0.025em 0.05em 0 var(--blue-75);
	position: relative;
	.hidden {
		pointer-events: none;
		opacity: 0;
	}
	.item {
		position: absolute;
		top: 0;
		left: 0;
	}
	.first {
		animation: ${Glitch} 375ms infinite;

		clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
		transform: translate(0.05em, -0.025em);
		opacity: 0.8;
	}
	.last {
		animation: ${Glitch} 375ms infinite;

		clip-path: polygon(0 50%, 100% 60%, 100% 100%, 0 100%);
		transform: translate(-0.05em, 0.025em);
		opacity: 0.8;
	}
	@media (prefers-reduced-motion: reduce) {
		*,
		::before,
		::after {
			animation-delay: -1ms !important;
			animation-duration: 1ms !important;
			animation-iteration-count: 1 !important;
			background-attachment: initial !important;
			scroll-behavior: auto !important;
			transition-duration: 0s !important;
			transition-delay: 0s !important;
		}
	}
`

export const GlitchText: React.FC = ({ children }) => {
	return (
		<Text>
			<span className="item">{children}</span>
			<span aria-hidden="true" className="item first">
				{children}
			</span>
			<span aria-hidden="true" className="item last">
				{children}
			</span>
			<span className="hidden">{children}</span>
		</Text>
	)
}
