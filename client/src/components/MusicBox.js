import React, { Component } from 'react'
import '../styles/index.css'

const MusicBox = ({ id, name, preview_url, artist_name, album_name, album_art }) => (
  <div key={id}>
    <span>{name}</span>
    <a href={preview_url}></a>
    <span>{artist_name}</span>
    <h3>{album_name}</h3>
    <img src={album_art} alt={album_name}/>
  </div>
)

export default MusicBox