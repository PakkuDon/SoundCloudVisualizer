import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import Sidebar from './components/Sidebar'
import TrackList from './components/TrackList'
import MainContent from './components/MainContent'
import NotificationList from './components/NotificationList'
import Visualizer from './components/Visualizer'
import Player from './components/Player'
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

  return (
    <main>
      <Sidebar>
        <div className={styles.history}>
          <TrackList title={'Recently played'} tracks={testState.history} />
        </div>
        <div className={styles.playbackQueue}>
          <TrackList title={'Queued'} tracks={testState.playbackQueue} />
        </div>
      </Sidebar>
      <MainContent>
        <NotificationList notifications={testState.notifications} />
        <Visualizer />
        <Player
          track={testState.playbackQueue[0]}
          inputUrl={inputUrl}
          onUrlEdit={(trackUrl) => setInputTrack(trackUrl)}
        />
      </MainContent>
    </main>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
)
