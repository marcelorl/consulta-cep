import React from 'react'
import { cleanup } from 'react-testing-library'

import Button from '../Button'
import { renderWithStyledProvider } from '../../../../testHelper'

afterEach(cleanup)

describe('#Button atom', () =>
  it('renders component', () => {
    const { container } = renderWithStyledProvider(<Button />)

    expect(container.firstChild).toMatchSnapshot()
  })
)
