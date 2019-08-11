import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import Sidebar from './components/Sidebar'
import TrackList from './components/TrackList'
import MainContent from './components/MainContent'
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
  history: tracks,
  playbackQueue: tracks,
}

const App = () => {
  const [inputUrl, setInputTrack] = useState()
  const [currentSong, setCurrentSong] = useState()
  const [history, setHistory] = useState([])

  const addToHistory = resolvedTrack => {
    setHistory([
      ...history.filter(track => track.id !== resolvedTrack.id),
      resolvedTrack,
    ])
  }

  const loadSong = () => {
    SoundCloudClient.resolve(inputUrl)
      .then(response => {
        const responseWithAuthorisedStreamUrl = {
          ...response,
          stream_url: `${response.stream_url}?client_id=${SOUNDCLOUD_CLIENT_ID}`
        }
        setCurrentSong(responseWithAuthorisedStreamUrl)
        addToHistory(responseWithAuthorisedStreamUrl)
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
      </Sidebar>
      <MainContent>
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
