import React from 'react'
import { mount, shallow } from 'enzyme'
import Home from '../../components/Home'

describe('Home', () => {
  let wrapper
  beforeEach(() => wrapper = shallow(<Home />))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(3)
  })

  it('checks the state of city key', () => {
    wrapper.setState({ city: 'City' })
    expect(wrapper.state('city')).toEqual('City')
  });
})

describe('Mounted Home', () => {
  let wrapper
  const onChange = jest.fn()
  beforeEach(() => wrapper = mount(<Home onChange={onChange}/>))

  it('calls onChange when the keyboard is triggered',  () => {
    // wrapper.find('input').simulate('change', { target: { value: 'City' } })
    // expect(onChange).toHaveBeenCalledWith('City')
  })
})