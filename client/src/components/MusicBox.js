import React from 'react'
import '../styles/index.css'

const MusicBox = ({ id, name, preview_url, artist_name, album_name, album_art }) => (
  <section key={id} className='card hvr-sweep-to-top'>
    <header className='headline'>
      <img src={album_art} alt={album_name} />
    </header>
    <div className='article'>
      <h2>{name}</h2>
      <h2>{artist_name}</h2>
    </div>
  </section>
)

export default MusicBox