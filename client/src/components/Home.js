import React, { Component } from 'react'
import Form from './Form'
import axios from 'axios';
import MusicBoxContainer from './MusicBoxContainer';

export default class Home extends Component {
  state = {
    city: '',
    weatherData: [],
    musicData: []
  }

  handleInputChange = event => {
    const{ name, value } = event.target;
    this.setState({
      [name]: value
    })
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleFormSubmit = event => {
    event.preventDefault()
    axios
    .get('/api/weather', { params: { city: this.state.city } })
    .then(results => {
      this.setState({
        weatherData: results.data
      })
      return axios.post('/api/songs', { params: { weatherData: this.state.weatherData } })
    })
    .then(results => {
      this.setState({
        musicData: results.data
      })
      console.log(results.data);
      
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const { city, musicData } = this.state;
    return (
      <div className='container'>
        <Form
          inputChange={this.handleInputChange}
          formSubmit={this.handleFormSubmit}
          city={city}
        />
        {
          musicData !== null && !musicData.length ? (
            <h2>No results to display</h2>
          ) : (
              <MusicBoxContainer
                musicData={musicData}
              />
            )
        }
      </div>
    )
  }
}
