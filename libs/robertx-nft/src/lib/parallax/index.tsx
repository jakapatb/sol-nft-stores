import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { motion, useMotionValue, useTransform, transform } from 'framer-motion'
const Container = styled.div`
	overflow: hidden;
	width: 100vh;
	height: 100vh;
	position: relative;
	object-fit: contain;
	img {
		position: absolute;
		width: 100vh;
		height: 100vh;
		top: 0;
		left: 0;
	}
` //"bg", "shirt", "bag", "head", "eye", "core", "horn", "sticker"
type Props = {
	bg?: string
	shirt?: string
	bag?: string
	head?: string
	eye?: string
	core?: string
	horn?: string
	sticker?: string
}

export const ParallaxNFT: React.FC<Props> = ({
	bg = 'assets/bg/7.png',
	shirt = 'assets/shirt/0.png',
	bag = 'assets/bag/0.png',
	head = 'assets/head/0.png',
	eye = 'assets/eye/0.png',
	core = 'assets/core/0.png',
	horn = 'assets/horn/0.png',
	sticker = 'assets/sticker/0.png'
}) => {
	const { width, height } = useWindowDimensions()
	const x = useMotionValue(height / 2)
	const y = useMotionValue(height / 2)

	const rotateX = useTransform(y, [0, height], [25, -25])
	const rotateY = useTransform(x, [0, height], [-25, 25])

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
		x.set(event.pageX)
		y.set(event.pageY)
	}
	const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (event) => {
		x.set(height / 2)
		y.set(height / 2)
	}
	return (
		<Container>
			<motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
				<img src={bg} draggable={false} />
				<img src={shirt} draggable={false} />
				<img src={bag} draggable={false} />

				<motion.div
					style={{
						width: '100vh',
						height: '100vh',
						borderRadius: 30,
						rotateX,
						rotateY
					}}
				>
					<img src={eye} draggable={false} />
					<img src={core} draggable={false} />
					<img src={horn} draggable={false} />
					<img src={head} draggable={false} />
					<img src={sticker} draggable={false} />
				</motion.div>

				{/* <motion.div
          animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
            loop: Infinity,
            repeatDelay: 1
          }}
        >
          <img
            src={'/assets/horn/0.png'}
            draggable={false}
            style={{ width: '50%', overflow: 'hidden', objectFit: 'cover', objectPosition: 'left' }}
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
            loop: Infinity,
            repeatDelay: 1
          }}
        >
          <img
            src={'/assets/horn/0.png'}
            draggable={false}
            style={{
              width: '50%',
              overflow: 'hidden',
              objectFit: 'cover',
              objectPosition: 'right',
              left: 'unset',
              right: 0
            }}
          />
        </motion.div> */}
			</motion.div>
		</Container>
	)
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}
function getWindowDimensions() {
	if (typeof window !== 'undefined') {
		const { innerWidth: width, innerHeight: height } = window
		return {
			width,
			height
		}
	}
	return {
		width: 0,
		height: 0
	}
}
