import React from "react"
import { SoundCloudTrack } from "../../propTypes"

import styles from "./TrackInformation.css"

const TrackInformation = ({ track }) => (
  <div className={styles.root}>
    <img
      className={styles.thumbnail}
      src={track.artwork_url}
      alt={`${track.title} artwork`}
    />
    <div className={styles.details}>
      <div>
        {track.user && (
          <a
            href={track.user.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {track.user.username}
          </a>
        )}
      </div>
      <div>{track.title}</div>
      <div>{track.genre}</div>
    </div>
  </div>
)

TrackInformation.propTypes = {
  track: SoundCloudTrack.isRequired,
}

export default TrackInformation
