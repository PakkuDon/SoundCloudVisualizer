import React from "react"
import PropTypes from "prop-types"
import { SoundCloudTrack } from "../../propTypes"
import TrackListItem from "../TrackListItem"
import styles from "./styles.css"

const TrackList = ({ onTrackDelete, onTrackQueue, onTrackSelect, tracks }) => (
  <React.Fragment>
    <div className={styles.root}>
      {tracks
        .slice()
        .reverse()
        .map(track => (
          <TrackListItem
            key={`track-${track.id}`}
            onDelete={onTrackDelete}
            onQueue={onTrackQueue}
            onSelect={onTrackSelect}
            track={track}
          />
        ))}
    </div>
  </React.Fragment>
)

TrackList.propTypes = {
  onTrackDelete: PropTypes.func,
  onTrackQueue: PropTypes.func,
  onTrackSelect: PropTypes.func,
  tracks: PropTypes.arrayOf(SoundCloudTrack),
}

TrackList.defaultProps = {
  tracks: [],
}

export default TrackList
