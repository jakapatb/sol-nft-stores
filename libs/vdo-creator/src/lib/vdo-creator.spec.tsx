import { render } from '@testing-library/react'

import VdoCreator from './vdo-creator'

describe('VdoCreator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VdoCreator />)
    expect(baseElement).toBeTruthy()
  })
})
