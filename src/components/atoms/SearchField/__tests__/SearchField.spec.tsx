import React from 'react'
import { ThemeProvider } from 'styled-components'
import { cleanup, render } from 'react-testing-library'

import SearchField from '../SearchField'
import { globalTheme } from '../../../../globalTheme'

afterEach(cleanup)

describe('#SearchField atom', () => {
  it('renders component', () => {
    const { container } = render(
      <ThemeProvider theme={globalTheme}>
        <SearchField id="id" />
      </ThemeProvider>
    )

    expect(container).toMatchSnapshot()
  })

  // it('tests onChange is called on typing', () => {
  //   const onChange = jest.fn()
  //   const { container } = render(
  // <ThemeProvider theme={globalTheme}>
  //       <SearchField id="id" onChange={onChange} />
  //     </ThemeProvider>
  //   )
  //
  //   wrapper.simulate('change', { target: { value: '' } })
  //
  //   expect(onChange).toBeCalled()
  // })
})
