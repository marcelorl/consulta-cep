import React from 'react'
import { ThemeProvider } from 'styled-components'
import { cleanup, fireEvent, render } from 'react-testing-library'

import FormSearchContainer from '../FormSearchContainer'
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
      <ThemeProvider theme={globalTheme}>
        <FormSearchContainer />
      </ThemeProvider>
    )

    fireEvent.click(getByText(/buscar/i))

    expect(fetch).not.toBeCalled()
  })
})


