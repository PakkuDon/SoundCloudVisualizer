import React from 'react'
import PropTypes from 'prop-types'
import { SoundCloudTrack } from '../../propTypes'

import Button from '../Button'
import IconDelete from '../icons/IconDelete'
import IconPlay from '../icons/IconPlay'
import IconQueue from '../icons/IconQueue'

import styles from './styles.css'

const TrackListItem = ({ onDelete, onSelect, track }) => (
  <div className={styles.root}>
    <div>{track.user.username}</div>
    <div>{track.title}</div>
    <div>{track.genre}</div>
    <div>
      <a href={track.permalink_url} target="_blank" rel="nofollow">Permalink</a>
    </div>
    <div className={styles.actions}>
      <Button onClick={() => onSelect(track.id)}><IconPlay /></Button>
      <Button onClick={() => onDelete(track.id)}><IconDelete /></Button>
      <Button><IconQueue /></Button>
    </div>
  </div>
)

TrackListItem.propTypes = {
  track: SoundCloudTrack.isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
}

TrackListItem.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
}

export default TrackListItem
