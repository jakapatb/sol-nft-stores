import React from 'react'
import { Hero } from '../components/Hero'
import { Overview } from '../components/Overview'
import { Rarity } from '../components/Rarity'
import { Team } from '../components/Team'

const HomePage = () => {
	return (
		<>
			<div
				style={{
					minHeight: '100vh'
				}}
			>
				<Hero />
			</div>
			<div
				style={{
					minHeight: '100vh'
				}}
			>
				<Overview />
			</div>
			<div
				style={{
					minHeight: '100vh'
				}}
			>
				<Rarity />
			</div>
			<div
				style={{
					minHeight: '100vh'
				}}
			>
				<Team />
			</div>
		</>
	)
}

export default HomePage
