import { render } from '@testing-library/react'

import RoberxNft from './roberx-nft'

describe('RoberxNft', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RoberxNft />)
    expect(baseElement).toBeTruthy()
  })
})
