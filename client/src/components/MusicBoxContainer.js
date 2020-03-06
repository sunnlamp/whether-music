import React from 'react'
import '../styles/index.css'
import MusicBox from './MusicBox'

const MusicBoxContainer = ({ musicData }) => {
  return (
    musicData.map(music => {
      return (
        <MusicBox
          id={music.id}
          name={music.name}
          preview_url={music.preview_url}
          artist_name={music.album.artists[0].name}
          album_name={music.album.name}
          album_art={music.album.images[1].url}
          height={music.album.images[1].height}
          width={music.album.images[1].width}
        />
      )
    })
  )
}

export default MusicBoxContainer