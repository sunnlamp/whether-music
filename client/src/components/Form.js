import React from 'react'
import '../styles/index.css'

const Form = ({ inputChange, formSubmit, city }) => (
  <div className='search'>
    <form>
      <input
        className='searchInput'
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
        className='search-icon'
      >
        find music
      </button>
    </form>    
  </div>
)

export default Form