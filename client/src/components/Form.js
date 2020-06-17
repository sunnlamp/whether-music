import React from 'react'
import '../styles/index.css'

const Form = ({ inputChange, formSubmit, city }) => (
  <form className='search-bar'>
    <input
      className='search-input'
      id='City'
      type='text'
      value={city}
      placeholder='Enter a city'
      name='city'
      onChange={inputChange}
      required
    />
    <button
      onClick={formSubmit}
      type='submit'
      className='search-btn'
    >
      <i class="fas fa-search"></i>
    </button>
  </form>    
)

export default Form