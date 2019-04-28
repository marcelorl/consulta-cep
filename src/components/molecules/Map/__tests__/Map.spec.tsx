import React from 'react'
import { ThemeProvider } from 'styled-components'
import { cleanup, render } from 'react-testing-library'

import Map from '../Map'
import { globalTheme } from '../../../../globalTheme'

afterEach(cleanup)

describe('#Map', () => {
  it('should render Map', () => {
    const { container } = render(
      <ThemeProvider theme={globalTheme}>
        <Map />
      </ThemeProvider>
    )

    expect(container).toMatchSnapshot()
  })
})


