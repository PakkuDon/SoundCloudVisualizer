import React from "react"
import PropTypes from "prop-types"
import { SoundCloudTrack } from "../../propTypes"

import styles from "./TrackInformation.css"

const TrackInformation = ({ track }) => (
  <div>
    <img className={styles.thumbnail} src={track.artwork_url} />
    <div className={styles.details}>
      <div>{track.user && track.user.username}</div>
      <div>{track.title}</div>
      <div>{track.genre}</div>
    </div>
  </div>
)

TrackInformation.propTypes = {
  track: SoundCloudTrack.isRequired,
}

export default TrackInformation
