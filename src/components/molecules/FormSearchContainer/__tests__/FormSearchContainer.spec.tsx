import React from 'react'
import { ThemeProvider } from 'styled-components'
import { cleanup, fireEvent, render } from 'react-testing-library'

import FormSearchContainer from '../FormSearchContainer'
import { StoreProvider } from '../../../../contexts/store'
import { globalTheme } from '../../../../globalTheme'

afterEach(cleanup)

describe('#FormSearchContainer', () => {
  it('should render FormSearchContainer', () => {
    const { container } = render(
      <ThemeProvider theme={globalTheme}>
        <FormSearchContainer />
      </ThemeProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it('should not call fetch, because zipcode is required', () => {
    const { getByText } = render(
      <StoreProvider>
        <ThemeProvider theme={globalTheme}>
          <FormSearchContainer />
        </ThemeProvider>
      </StoreProvider>
    )

    fireEvent.click(getByText(/buscar/i))

    expect(fetch).not.toBeCalled()
  })

  it('should call fetch, because zipcode is now filled', () => {
    const { getByText, getByTestId } = render(
      <StoreProvider>
        <ThemeProvider theme={globalTheme}>
          <FormSearchContainer />
        </ThemeProvider>
      </StoreProvider>
    )

    fireEvent.change(getByTestId('search-field'), { target: { value: '00000-000' } })
    fireEvent.click(getByText(/buscar/i))

    expect(fetch).toBeCalled()
  })
})


