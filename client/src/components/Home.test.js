import React from 'react'
import { mount, shallow } from 'enzyme'
import Home from './Home'
import { isThisHour } from 'date-fns';


describe('Home', () => {
  let wrapper
  beforeEach(() => wrapper = shallow(<Home />))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(3)
  })
})