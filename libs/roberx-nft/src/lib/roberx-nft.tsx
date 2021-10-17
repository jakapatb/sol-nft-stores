import styled from '@emotion/styled'

/* eslint-disable-next-line */
export interface RoberxNftProps {}

const StyledRoberxNft = styled.div`
  color: pink;
`

export function RoberxNft(props: RoberxNftProps) {
  return (
    <StyledRoberxNft>
      <h1>Welcome to RoberxNft!</h1>
    </StyledRoberxNft>
  )
}

export default RoberxNft
