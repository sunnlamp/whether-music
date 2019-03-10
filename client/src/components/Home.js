import React, { Component } from 'react'
import axios from 'axios'
import { weatherConverter } from '../helpers/dataToWeather'


export default class Home extends Component {
  state ={
    city: '',
    weatherData: data
  }

  handleInputChange = event => {
    const{ name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    axios
      .get('/api/weather', { params: { city: this.state.city } })
      .then(results => {
        console.log(results.data);
        
        this.setState({
          weatherData: results.data
        })
      })
  }

  weatherConverter()

  render() {
    return (
      <div>
        <form>
          <div className='form-group'>
            <label htmlFor='Weather'>
              <strong>Weather</strong>
            </label>
            <input
              className='form-control'
              id='City'
              type='text'
              value={this.state.city}
              placeholder='Enter a city'
              name='city'
              onChange={this.handleInputChange}
              required 
            />
          </div>
          <div className='pull-right'>
            <button
              onClick={this.handleFormSubmit}
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
