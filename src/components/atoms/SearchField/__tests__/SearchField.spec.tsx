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
})
