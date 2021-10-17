import styled from '@emotion/styled'
import { motion } from 'framer-motion'
const StyledPage = styled.div`
  .page {
  }
`

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <motion.div
        style={{ padding: '1rem', background: 'black', width: 300, height: 300 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%']
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1
        }}
      >
        <img src="example.png" alt="Nx logo" width="300" height="300" />
      </motion.div>
    </StyledPage>
  )
}

export default Index
