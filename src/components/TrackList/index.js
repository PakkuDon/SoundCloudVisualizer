import React from 'react'
import PropTypes from 'prop-types'
import { SoundCloudTrack } from '../../propTypes'
import TrackListItem from '../TrackListItem'

const TrackList = ({ title, tracks }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <div className="list">
      {tracks.reverse().map(track => (
        <TrackListItem track={track} />
      ))}
    </div>
  </React.Fragment>
)

TrackList.propTypes = {
  title: PropTypes.string,
  tracks: PropTypes.arrayOf(SoundCloudTrack),
}

TrackList.defaultProps = {
  title: '',
  tracks: [],
}

export default TrackList
