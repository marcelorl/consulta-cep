import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'

import { Store, useAddress } from './contexts/store'
import { globalTheme } from './globalTheme'
import { IState } from './models'

export const renderWithProviders = (state: IState, ui: any) => {
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

export const renderWithStyledProvider = (ui: any) => {
  return render(
    <ThemeProvider theme={globalTheme}>
      {ui}
    </ThemeProvider>
  )
}
