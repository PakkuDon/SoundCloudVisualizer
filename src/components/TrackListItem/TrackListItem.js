import React from "react"
import PropTypes from "prop-types"
import { SoundCloudTrack } from "../../propTypes"

import Button from "../Button"
import IconDelete from "../Icons/IconDelete"
import IconPlay from "../Icons/IconPlay"
import IconQueue from "../Icons/IconQueue"

import styles from "./TrackListItem.css"

const TrackListItem = ({ onDelete, onQueue, onSelect, track }) => (
  <div className={styles.root}>
    <div>
      <a
        href={track.user.permalink_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {track.user.username}
      </a>
    </div>
    <div>
      <a href={track.permalink_url} target="_blank" rel="noopener noreferrer">
        {track.title}
      </a>
    </div>
    <div>{track.genre}</div>
    <div className={styles.actions}>
      {onSelect && (
        <Button onClick={() => onSelect(track.id)}>
          <IconPlay title="Play track" />
        </Button>
      )}
      {onDelete && (
        <Button onClick={() => onDelete(track.id)}>
          <IconDelete title="Delete track" />
        </Button>
      )}
      {onQueue && (
        <Button onClick={() => onQueue(track.id)}>
          <IconQueue title="Add to playback queue" />
        </Button>
      )}
    </div>
  </div>
)

TrackListItem.propTypes = {
  track: SoundCloudTrack.isRequired,
  onDelete: PropTypes.func,
  onQueue: PropTypes.func,
  onSelect: PropTypes.func,
}

export default TrackListItem
