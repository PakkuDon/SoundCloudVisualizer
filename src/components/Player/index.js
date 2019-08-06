import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { SoundCloudTrack } from '../../propTypes'
import styles from './styles.css'

const Player = ({ inputUrl, onSongSelect, onUrlEdit, track }) => (
  <div className={styles.root}>
    <div>
      <form>
        <input
          type="text"
          size="40"
          value={inputUrl}
          onChange={(event) => onUrlEdit(event.target.value)}
        />
      <Button onClick={onSongSelect}>Load song</Button>
      </form>
    </div>
    <div>
      <img className={styles.thumbnail} src={track.artwork_url} />
      <div className={styles.details}>
        <div>{track.user && track.user.username}</div>
        <div>{track.title}</div>
        <div>{track.genre}</div>
      </div>
    </div>
    <audio autoPlay crossOrigin="anonymous" controls src={track.stream_url} >
      Your browser does not support the HTML5 audio element.
    </audio>
    <div className={styles.footer}>
      <a href="https://github.com/PakkuDon/SoundCloudVisualizer">Source code on GitHub</a>
    </div>
  </div>
)

Player.propTypes = {
  inputUrl: PropTypes.string,
  track: SoundCloudTrack,
  onSongSelect: PropTypes.func,
  onUrlEdit: PropTypes.func,
}

Player.defaultProps = {
  inputUrl: '',
  track: {},
  onUrlEdit: () => {},
}

export default Player
