import React from 'react'
import '../styles/index.css'

const MusicBox = ({ id, name, spotify_url, artist_name, album_name, album_art }) => (
  <section key={id} className='music-box'>
    <img src={album_art} alt={album_name} className='musix-box-img'/>
    <div className='music-box-info'>
      <h2><a href={`${spotify_url}`} target='_blank' rel='noopener noreferrer'>{name}</a></h2>
      <h2>{artist_name}</h2>
    </div>
  </section>
)

export default MusicBox