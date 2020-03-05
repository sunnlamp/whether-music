import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from '../App'
import Home from '../../components/Home'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('App', () => {
  let wrapper

  beforeEach(() => wrapper = shallow(<App />))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })

  it('should render the Home component', () => {
    expect(wrapper.containsMatchingElement(<Home />)).toEqual(true)
  })
})