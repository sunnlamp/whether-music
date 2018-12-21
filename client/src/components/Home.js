import React, { Component } from 'react'

export default class Home extends Component {
  state ={
    city: ''
  }

  handleInputchange = event => {
    const{ name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

  }

  render() {
    return (
      <div>
        <form>
          <divtn className='form-group'>
            <label htmlFor='Weather'>
              <strong>Weather</strong>
            </label>
            <input
              className='form-control'
              id='City'
              type='text'
              value={this.state.city}
              placeholder='Enter a city'
              onChange={this.handleInputchange}
              required
            />
          </div>
          <div className='pull-right'>
            <button
              onClick={handleFormSubmit}
              type='submit'
              className='btn btn-lg btn-danger float-right'
            >
              Search
            </button>
          </div>
        </form>
      </div>
    )
  }
}
