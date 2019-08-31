import React from 'react'
import PropTypes from 'prop-types'
import { SoundCloudTrack } from '../../propTypes'
import TrackListItem from '../TrackListItem'
import styles from './styles.css'

const TrackList = ({ tracks }) => (
  <React.Fragment>
    <div className={styles.root}>
      {tracks.reverse().map(track => (
        <TrackListItem track={track} />
      ))}
    </div>
  </React.Fragment>
)

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(SoundCloudTrack),
}

TrackList.defaultProps = {
  tracks: [],
}

export default TrackList
