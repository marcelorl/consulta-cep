import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'

import { Store, useAddress } from './contexts/store'
import { globalTheme } from './globalTheme'

export const renderWithProviders = (state, ui) => {
  const StoreProvider = (props: any) => {
    const [ _, action ] = useAddress()

    return (
      <Store.Provider value={{ state, action }}>
        {props.children}
      </Store.Provider>
    )
  }

  return render(
    <StoreProvider>
      <ThemeProvider theme={globalTheme}>
        {ui}
      </ThemeProvider>
    </StoreProvider>
  )
}

export const renderWithStyledProvider = ui => {
  return render(
    <ThemeProvider theme={globalTheme}>
      {ui}
    </ThemeProvider>
  )
}
