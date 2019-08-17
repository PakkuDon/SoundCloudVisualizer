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

const App = () => {
  const [inputUrl, setInputTrack] = useState()
  const [currentSong, setCurrentSong] = useState()
  const [history, setHistory] = useState([])
  const [errorMessage, setErrorMessage] = useState()
  const [analyser, setAnalyser] = useState()

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
        setErrorMessage(error.message)
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
          onAudioRender={(audioAnalyser) => setAnalyser(audioAnalyser)}
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
