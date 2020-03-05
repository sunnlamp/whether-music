import React, { Component } from 'react'
import '../styles/index.css'
import MusicBox from './MusicBox'

export default class MusicBoxContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { musicData } = this.props.musicData
    const musicBoxes = musicData.map(song => (
      <MusicBox />
    ))
    return (
      <div>
        MusicBoxContainer
      </div>
    )
  }
}
