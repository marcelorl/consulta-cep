import React from 'react'
import { ThemeProvider } from 'styled-components'
import { cleanup, fireEvent, render } from 'react-testing-library'

import MapContainer from '../MapContainer'
import { Store, useAddress } from '../../../../contexts/store'
import { globalTheme } from '../../../../globalTheme'

afterEach(cleanup)

describe('#MapContainer', () => {
  it('should not call fetch, because zipcode is required', () => {
    const StoreProvider = (props: any) => {
      const [ _, action ] = useAddress()
      const state = { address: {}, status: 'ERROR' }

      return (
        <Store.Provider value={{ state, action }}>
          {props.children}
        </Store.Provider>
      )
    }

    const { container, getByText } = render(
      <StoreProvider>
        <ThemeProvider theme={globalTheme}>
          <MapContainer />
        </ThemeProvider>
      </StoreProvider>
    )

    expect(getByText('CEP não encontrado!')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})


