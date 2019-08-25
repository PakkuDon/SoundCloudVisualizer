import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import Sidebar from './components/Sidebar'
import TrackList from './components/TrackList'
import MainContent from './components/MainContent'
import Visualizer from './components/Visualizer'
import Player from './components/Player'
import SoundCloudClient from './SoundCloudClient'
import styles from './style.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [],
    }

    this.loadSong = this.loadSong.bind(this)
    this.addToHistory = this.addToHistory.bind(this)
    this.setHistory = this.setHistory.bind(this)
    this.setCurrentSong = this.setCurrentSong.bind(this)
    this.setErrorMessage = this.setErrorMessage.bind(this)
    this.setInputTrack = this.setInputTrack.bind(this)
    this.setAnalyser = this.setAnalyser.bind(this)
    this.setAudioData = this.setAudioData.bind(this)
  }

  loadSong() {
    this.setErrorMessage('')
    SoundCloudClient.resolve(this.state.inputUrl)
      .then(response => {
        this.setCurrentSong(response)
        this.addToHistory(response)
      })
      .catch(error => {
        this.setErrorMessage(error.message)
      })
  }

  addToHistory(resolvedTrack) {
    this.setHistory([
      ...this.state.history.filter(track => track.id !== resolvedTrack.id),
      resolvedTrack,
    ])
  }

  setHistory(history) {
    this.setState({ history })
  }

  setCurrentSong(currentSong) {
    this.setState({ currentSong })
  }

  setErrorMessage(errorMessage) {
    this.setState({ errorMessage })
  }

  setInputTrack(inputUrl) {
    this.setState({ inputUrl })
  }

  setAnalyser(audioAnalyser) {
    this.setState({ audioAnalyser }, () => {
      this.setAudioData()
    })
  }

  setAudioData() {
    const { audioAnalyser } = this.state

    const updateAudioData = () => {
      const audioData = new Uint8Array(audioAnalyser.frequencyBinCount)
      audioAnalyser.getByteFrequencyData(audioData)
      this.setState({ audioData })
      requestAnimationFrame(updateAudioData)
    }

    requestAnimationFrame(updateAudioData)
  }

  render() {
    const {
      currentSong,
      errorMessage,
      history,
      inputUrl,
    } = this.state

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
            errorMessage={errorMessage}
            track={currentSong}
            inputUrl={inputUrl}
            onAudioRender={(audioAnalyser) => this.setAnalyser(audioAnalyser)}
            onUrlEdit={(trackUrl) => this.setInputTrack(trackUrl)}
            onSongSelect={this.loadSong}
          />
        </MainContent>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
)
