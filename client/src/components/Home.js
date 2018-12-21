import React, { Component } from 'react'

class Home extends Component {
  state ={
    city: ""
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
        
      </div>
    )
  }
}
export default Home