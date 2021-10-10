import styled from '@emotion/styled'

/* eslint-disable-next-line */
export interface VdoCreatorProps {}

const StyledVdoCreator = styled.div`
  color: pink;
`

export function VdoCreator(props: VdoCreatorProps) {
  return (
    <StyledVdoCreator>
      <h1>Welcome to VdoCreator!</h1>
    </StyledVdoCreator>
  )
}

export default VdoCreator
