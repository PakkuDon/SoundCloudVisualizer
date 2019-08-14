import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Audio from '../Audio'
import TrackInformation from '../TrackInformation'
import { SoundCloudTrack } from '../../propTypes'
import styles from './styles.css'

const Player = ({ inputUrl, onSongSelect, onUrlEdit, track }) => {
  const onSubmit = (event) => {
    event.preventDefault()
    onSongSelect()
  }

  return (
    <div className={styles.root}>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            size="40"
            value={inputUrl}
            onChange={(event) => onUrlEdit(event.target.value)}
          />
          <Button type="submit">Load song</Button>
        </form>
      </div>
      <TrackInformation track={track} />
      <Audio src={track.stream_url} />
      <div className={styles.footer}>
        <a href="https://github.com/PakkuDon/SoundCloudVisualizer">Source code on GitHub</a>
      </div>
    </div>
  )
}

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
