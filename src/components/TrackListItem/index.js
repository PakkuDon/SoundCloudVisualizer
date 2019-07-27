import React from 'react'
import PropTypes from 'prop-types'
import { SoundCloudTrack } from '../../propTypes'

import IconDelete from '../icons/IconDelete'
import IconPlay from '../icons/IconPlay'
import IconQueue from '../icons/IconQueue'

import styles from './styles.css'

const TrackListItem = ({ track }) => (
  <div className={styles.root}>
    <div>{track.user.username}</div>
    <div>{track.title}</div>
    <div>{track.genre}</div>
    <div>
      <a href={track.permalink_url}>Permalink</a>
    </div>
    <div className={styles.actions}>
      <button><IconPlay /></button>
      <button><IconDelete /></button>
      <button><IconQueue /></button>
    </div>
  </div>
)

TrackListItem.propTypes = {
  track: SoundCloudTrack.isRequired,
}

export default TrackListItem
