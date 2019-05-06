import React from 'react'
import { cleanup } from 'react-testing-library'

import Map from '../Map'
import { renderWithStyledProvider } from '../../../../testHelper'

afterEach(cleanup)

describe('#Map', () => {
  it('should render Map', () => {
    const { container } = renderWithStyledProvider(<Map />)

    expect(container).toMatchSnapshot()
  })
})


