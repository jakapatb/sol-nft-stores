import { ThreeCanvas, useVideoTexture } from '@remotion/three'
import React, { useEffect, useRef, useState } from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame, Img } from 'remotion'
import styled from '@emotion/styled'
import expImage from './example.png'
import { keyframes } from '@emotion/react'
const container: React.CSSProperties = {
  backgroundColor: 'white'
}
const Container = styled.div`
  position: relative;
`

export const Scene: React.FC<{
  videoSrc: string
  baseScale: number
}> = ({ baseScale, videoSrc }) => {
  const frame = useCurrentFrame()

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp'
  })

  return (
    <AbsoluteFill style={container}>
      <Container>
        <Img src={expImage} style={{ opacity }} />
      </Container>
    </AbsoluteFill>
  )
}

// const glitch = keyframes`
//  0% {
//       clip-path: inset(80% -6px 0 0);
//       transform: translate(-20px, -10px);
//     }
//     10% {
//       clip-path: inset(10% -6px 85% 0);
//       transform: translate(10px, 10px);
//     }
//     20% {
//       clip-path: inset(80% -6px 0 0);
//       transform: translate(-10px, 10px);
//     }
//     30% {
//       clip-path: inset(10% -6px 85% 0);
//       transform: translate(0px, 5px);
//     }
//     40% {
//       clip-path: inset(50% -6px 30% 0);
//       transform: translate(-5px, 0px);
//     }
//     50% {
//       clip-path: inset(10% -6px 85% 0);
//       transform: translate(5px, 0px);
//     }
//     60% {
//       clip-path: inset(40% -6px 43% 0);
//       transform: translate(5px, 10px);
//     }
//     70% {
//       clip-path: inset(50% -6px 30% 0);
//       transform: translate(-10px, 10px);
//     }
//     80% {
//       clip-path: inset(80% -6px 5% 0);
//       transform: translate(20px, -10px);
//     }
//     90% {
//       clip-path: inset(80% -6px 0 0);
//       transform: translate(-10px, 0px);
//     }
//     100% {
//       clip-path: inset(80% -6px 0 0);
//       transform: translate(0);
//     }
// `
// const StyledImg = styled(Img)`
//   position: absolute;
//   opacity: 100%;
//   filter: drop-shadow(16px 16px 20px red) invert(75%);
//   animation: ${glitch} 5s linear infinite;
// `
