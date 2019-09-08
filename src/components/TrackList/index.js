import React from 'react'
import PropTypes from 'prop-types'
import { SoundCloudTrack } from '../../propTypes'
import TrackListItem from '../TrackListItem'
import styles from './styles.css'

const TrackList = ({ onTrackDelete, tracks }) => (
  <React.Fragment>
    <div className={styles.root}>
      {tracks.slice().reverse().map(track => (
        <TrackListItem
          key={`track-${track.id}`}
          onDelete={onTrackDelete}
          track={track}
        />
      ))}
    </div>
  </React.Fragment>
)

TrackList.propTypes = {
  onTrackDelete: PropTypes.func,
  tracks: PropTypes.arrayOf(SoundCloudTrack),
}

TrackList.defaultProps = {
  onTrackDelete: () => {},
  tracks: [],
}

export default TrackList
