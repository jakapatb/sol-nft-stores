import React from 'react'
import { FAQ } from '../components/FAQ'
import { Hero } from '../components/Hero'
import { Overview } from '../components/Overview'
import { Rarity } from '../components/Rarity'
import { Team } from '../components/Team'

const HomePage = () => {
	return (
		<>
			<Hero />
			<div
				style={{
					minHeight: '50rem'
				}}
			>
				<Overview />
			</div>
			<div
				style={{
					minHeight: '50rem'
				}}
			>
				<Rarity />
			</div>
			<div
				style={{
					minHeight: '50rem'
				}}
			>
				<FAQ />
			</div>
			<div
				style={{
					minHeight: '50rem'
				}}
			>
				<Team />
			</div>
		</>
	)
}

export default HomePage
