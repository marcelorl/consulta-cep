import React from 'react'
import { cleanup } from 'react-testing-library'

import MapContainer from '../MapContainer'
import { renderWithProviders } from '../../../../testHelper'

afterEach(cleanup)

describe('#MapContainer', () => {
  it('should not show mapContainer', async () => {
    const state = { address: {}, status: '' }

    const { container } = renderWithProviders(state, <MapContainer />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should not call fetch, because zipcode is required', async () => {
    const state = { address: {}, status: 'ERROR' }

    const { container } = renderWithProviders(state, <MapContainer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})


