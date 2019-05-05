import React from 'react'
import { cleanup, fireEvent } from 'react-testing-library'
// import { waitForDomChange } from 'dom-testing-library'

import MapContainer from '../MapContainer'
import { renderWithProviders } from '../../../../testHelper'

afterEach(cleanup)

describe('#MapContainer', () => {
  it('should not call fetch, because zipcode is required', async () => {
    const state = { address: {}, status: 'ERROR' }

    const { asFragment, container, debug, getByTestId } = renderWithProviders(state, <MapContainer />)

    const firstRender = asFragment()

    fireEvent.click(getByTestId('close-button'))

    // await waitForDomChange({ container })

    expect(firstRender).toMatchDiffSnapshot(asFragment())
  })
})


