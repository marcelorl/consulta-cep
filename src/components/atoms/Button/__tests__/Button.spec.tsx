import React from 'react'
import { shallow } from 'enzyme'

import Button from '../Button'

describe('#Button atom', () =>
  it('renders component', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper).toMatchSnapshot()
  })
)
