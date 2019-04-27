import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from 'react-testing-library'

import Button from '../Button'
import { globalTheme } from '../../../../globalTheme'

describe('#Button atom', () =>
  it('renders component', () => {
    const { container } = render(
  <ThemeProvider theme={globalTheme}>
        <Button />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
)
