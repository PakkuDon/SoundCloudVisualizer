import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { SoundCloudTrack } from '../../propTypes'
import styles from './styles.css'

const Player = ({ inputUrl, track }) => (
  <React.Fragment>
    <div>
      <form id="player-form">
        <input
          type="text"
          id="track-url"
          size="40"
          value={inputUrl}
        />
      <Button>Load song</Button>
      </form>
    </div>
    <div id="song-information">
      <img className={styles.thumbnail} src={track.artwork_url} />
      <div className={styles.details}>
        <div id="artist">{track && track.user.username}</div>
        <div id="title">{track.title}</div>
        <div id="genre">{track.genre}</div>
      </div>
    </div>
    <audio id="player" autoplay crossorigin="anonymous" controls src={track.stream_url} >
      Your browser does not support the HTML5 audio element.
    </audio>
    <footer>
      <a href="https://github.com/PakkuDon/SoundCloudVisualizer">Source code on GitHub</a>
    </footer>
  </React.Fragment>
)

Player.propTypes = {
  inputUrl: PropTypes.string,
  track: SoundCloudTrack,
}

export default Player
