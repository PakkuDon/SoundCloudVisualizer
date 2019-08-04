import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import Sidebar from './components/Sidebar'
import TrackList from './components/TrackList'
import MainContent from './components/MainContent'
import NotificationList from './components/NotificationList'
import Visualizer from './components/Visualizer'
import Player from './components/Player'
import SoundCloudClient, { SOUNDCLOUD_CLIENT_ID } from './SoundCloudClient'
import styles from './style.css'

const tracks = [
  {
    id: 42873590,
    title: "Awakened",
    genre: "Drum & Bass",
    permalink_url: "https://soundcloud.com/dub-motion/dub-motion-awakened",
    artwork_url: "https://i1.sndcdn.com/artworks-000027918643-q12cxv-large.jpg",
    stream_url: "https://api.soundcloud.com/tracks/42873590/stream",
    user: {
      username: "Dub Motion",
    },
  },
]

const testState = {
  notifications: [
    'This is a test notification',
    'Another test',
  ],
  history: tracks,
  playbackQueue: tracks,
}

const App = () => {
  const [inputUrl, setInputTrack] = useState()
  const [currentSong, setCurrentSong] = useState()
  const [history, setHistory] = useState([])

  const loadSong = () => {
    SoundCloudClient.resolve(inputUrl)
      .then(response => {
        const responseWithAuthorisedStreamUrl = {
          ...response,
          stream_url: `${response.stream_url}?client_id=${SOUNDCLOUD_CLIENT_ID}`
        }
        setCurrentSong(responseWithAuthorisedStreamUrl)
        setHistory([
          ...history,
          responseWithAuthorisedStreamUrl,
        ])
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <main>
      <Sidebar>
        <div className={styles.history}>
          <TrackList title={'Recently played'} tracks={history} />
        </div>
        <div className={styles.playbackQueue}>
          <TrackList title={'Queued'} tracks={testState.playbackQueue} />
        </div>
      </Sidebar>
      <MainContent>
        <NotificationList notifications={testState.notifications} />
        <Visualizer />
        <Player
          track={currentSong}
          inputUrl={inputUrl}
          onUrlEdit={(trackUrl) => setInputTrack(trackUrl)}
          onSongSelect={loadSong}
        />
      </MainContent>
    </main>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
)
