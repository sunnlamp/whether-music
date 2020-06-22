import React, { Component } from 'react'
// import Script from 'react-load-script'
import Weather from './Weather'
import Form from './Form'
import MusicBoxContainer from './MusicBoxContainer'
import axios from 'axios'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      // variable for Google Maps suggestions in search bar
      // query: '',
      message: 'No results to display',
      weatherData: {},
      musicData: [],
    }
    // this.handleScriptLoad = this.handleScriptLoad.bind(this)
    // this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
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
      if (results.data.length !== 0) {
        this.setState({ weatherData: results.data })
        console.log(results.data);
        
      } else {
        this.setState({ city: 'Please enter a city' })
      }
      return axios.post('/api/songs', { params: { weatherData: this.state.weatherData } })
    })
    .then(results => {
      this.setState({
        musicData: results.data
      })      
    })
    .catch(error => {
      console.log(error);
    })
  }

  // For handling Google Maps API suggestions in search bar
  // handleScriptLoad = () => {
  //   const options = { types: ['(cities)'] }

  //   this.autocomplete = new google.maps.places.Autocomplete(
  //     document.getElementById('autocomplete', options)
  //   )

  //   this.autocomplete.setFields(['address_components',
  //                                'formatted_address'])
    
  //   this.autocomplete.addListener('place_changed',
  //                                  this.handlePlaceSelect)
  // }

  // handlePlaceSelect = () => {
  //   const addressObject = this.autocomplete.getPlace()
  //   const address = addressObject.address_components;

  //   if (address) {
  //     this.setState(
  //       {
  //         city:address[0].long_name,
  //         // this was for the Script
  //         // query: addressObject.formattedaddres
  //       }
  //     )
  //   }
  // }

  render() {
    const { city, message, musicData, weatherData } = this.state;
    
    return (
      <div className='home'>
        <h2 className='title'>whether music</h2>
        {/* <Script
              url={`https://maps.googleapis.com/maps/api/js?key=keygoeshere&libraries=places`}
              onLoad={this.handleScriptLoad}
            /> */}
        {
          weatherData.length !== null ? (
            <h1 className='no-weather'>No weather to dislay yet</h1>
          ) : (
            <Weather
              weatherData={weatherData}
            />
          )
        }
        <Form
          id='autocomplete'
          inputChange={this.handleInputChange}
          formSubmit={this.handleFormSubmit}
          city={city}
        />
        {
          musicData !== null && !musicData.length ? (
          <h1 className='no-result'>{`${message}`}</h1>
          ) : (
            <div className='music-container'>
              <MusicBoxContainer
                musicData={musicData}
              />
            </div>
          )
        }
      </div>
    )
  }
}
