import React from 'react'
import { cleanup } from 'react-testing-library'

import SearchField from '../SearchField'
import { renderWithStyledProvider } from '../../../../testHelper'

afterEach(cleanup)

describe('#SearchField atom', () => {
  it('renders component', () => {
    const { container } = renderWithStyledProvider(<SearchField id="id" />)

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
