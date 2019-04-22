import React from 'react'
import { shallow } from 'enzyme'

import SearchField from '../SearchField'

describe('#SearchField atom', () => {
  it('renders component', () => {
    const wrapper = shallow(<SearchField id="id" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('tests onChange is called on typing', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<SearchField id="id" onChange={onChange} />)

    wrapper.simulate('change', { target: { value: '' } })

    expect(onChange).toBeCalled()
  })
})
