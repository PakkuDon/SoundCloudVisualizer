import React, { useCallback } from "react"
import PropTypes from "prop-types"
import Button from "../Button"
import Audio from "../Audio"
import TrackInformation from "../TrackInformation"
import { SoundCloudTrack } from "../../propTypes"
import styles from "./Player.css"

const Player = ({
  errorMessage,
  inputUrl,
  onAudioEnded,
  onAudioRender,
  onSongSelect,
  onUrlEdit,
  track,
}) => {
  const onSubmit = useCallback(event => {
    event.preventDefault()
    onSongSelect()
  })

  return (
    <div className={styles.root}>
      <form onSubmit={onSubmit}>
        <label htmlFor="track-input">
          SoundCloud track URL
          <input
            id="track-input"
            className={styles.input}
            type="text"
            value={inputUrl}
            onChange={event => onUrlEdit(event.target.value)}
          />
        </label>
        <Button type="submit">Load song</Button>
      </form>
      <div>{errorMessage}</div>
      {track && <TrackInformation track={track} />}
      <Audio
        src={track && track.stream_url}
        onEnded={onAudioEnded}
        onRender={onAudioRender}
      />
      <footer className={styles.footer}>
        <a href="https://github.com/PakkuDon/SoundCloudVisualizer">
          Source code on GitHub
        </a>
      </footer>
    </div>
  )
}

Player.propTypes = {
  errorMessage: PropTypes.string,
  inputUrl: PropTypes.string,
  track: SoundCloudTrack,
  onAudioRender: PropTypes.func,
  onSongSelect: PropTypes.func,
  onUrlEdit: PropTypes.func,
}

Player.defaultProps = {
  errorMessage: "",
  inputUrl: "",
  onAudioRender: () => {},
  onUrlEdit: () => {},
}

export default Player
