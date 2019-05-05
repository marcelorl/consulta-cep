import React from 'react'
import { cleanup, fireEvent } from 'react-testing-library'

import FormSearchContainer from '../FormSearchContainer'
import { renderWithProviders, renderWithStyledProvider } from '../../../../testHelper'

afterEach(cleanup)

describe('#FormSearchContainer', () => {
  it('should render FormSearchContainer', () => {
    const { container } = renderWithStyledProvider(<FormSearchContainer />)

    expect(container).toMatchSnapshot()
  })

  it('should not call fetch, because zipcode is required', () => {
    const { getByText } = renderWithProviders({}, <FormSearchContainer />)

    fireEvent.click(getByText(/buscar/i))

    expect(fetch).not.toBeCalled()
  })

  it('should call fetch, because zipcode is now filled', () => {
    const { getByText, getByTestId } = renderWithProviders({}, <FormSearchContainer />)

    fireEvent.change(getByTestId('search-field'), { target: { value: '00000-000' } })
    fireEvent.click(getByText(/buscar/i))

    expect(fetch).toBeCalled()
  })
})


