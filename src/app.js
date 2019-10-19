import React from "react"
import ReactDOM from "react-dom"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "normalize.css"
import "react-tabs/style/react-tabs.css"

import Sidebar from "./components/Sidebar"
import TrackList from "./components/TrackList"
import MainContent from "./components/MainContent"
import Visualizer from "./components/Visualizer"
import Player from "./components/Player"
import SoundCloudClient from "./SoundCloudClient"
import styles from "./style.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSong: null,
      frequencyData: [],
      waveformData: [],
      history: [],
      queue: [],
    }

    this.loadSong = this.loadSong.bind(this)
    this.playSong = this.playSong.bind(this)
    this.addToHistory = this.addToHistory.bind(this)
    this.addToQueue = this.addToQueue.bind(this)
    this.addToQueueFromId = this.addToQueueFromId.bind(this)
    this.deleteFromHistory = this.deleteFromHistory.bind(this)
    this.deleteFromQueue = this.deleteFromQueue.bind(this)
    this.playFromHistory = this.playFromHistory.bind(this)
    this.playFromQueue = this.playFromQueue.bind(this)
    this.playNextQueued = this.playNextQueued.bind(this)
    this.setHistory = this.setHistory.bind(this)
    this.setCurrentSong = this.setCurrentSong.bind(this)
    this.setErrorMessage = this.setErrorMessage.bind(this)
    this.setInputTrack = this.setInputTrack.bind(this)
    this.setAnalyser = this.setAnalyser.bind(this)
    this.setAudioData = this.setAudioData.bind(this)
  }

  loadSong() {
    this.setErrorMessage("")
    SoundCloudClient.resolve(this.state.inputUrl)
      .then(response => {
        if (!this.state.currentSong) {
          this.playSong(response)
        } else {
          this.addToQueue(response)
        }
      })
      .catch(error => {
        this.setErrorMessage(error.message)
      })
  }

  playSong(song) {
    this.setCurrentSong(song)
    this.addToHistory(song)
  }

  playNextQueued() {
    const { queue } = this.state
    if (queue.length > 0) {
      this.playSong(queue[0])
      this.setState({
        queue: queue.slice(1),
      })
    } else {
      this.setCurrentSong(null)
    }
  }

  setCurrentSong(currentSong) {
    this.setState({ currentSong })
  }

  addToHistory(resolvedTrack) {
    this.setHistory([
      ...this.state.history.filter(track => track.id !== resolvedTrack.id),
      resolvedTrack,
    ])
  }

  addToQueue(resolvedTrack) {
    this.setState({
      queue: [...this.state.queue, resolvedTrack],
    })
  }

  addToQueueFromId(trackId) {
    const selectedSong = this.state.history.find(track => track.id === trackId)
    this.setState({
      queue: this.state.queue.concat(selectedSong),
    })
  }

  deleteFromHistory(trackId) {
    this.setHistory(this.state.history.filter(track => track.id !== trackId))
  }

  deleteFromQueue(trackId) {
    this.setState({
      queue: this.state.queue.filter(track => track.id !== trackId),
    })
  }

  playFromHistory(trackId) {
    const selectedSong = this.state.history.find(track => track.id === trackId)
    this.playSong(selectedSong)
  }

  playFromQueue(trackId) {
    const selectedSong = this.state.history.find(track => track.id === trackId)
    this.playSong(selectedSong)
    this.deleteFromQueue(trackId)
  }

  setHistory(history) {
    this.setState({ history })
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
      const frequencyData = new Uint8Array(audioAnalyser.frequencyBinCount)
      const waveformData = new Uint8Array(audioAnalyser.fftSize)
      audioAnalyser.getByteFrequencyData(frequencyData)
      audioAnalyser.getByteTimeDomainData(waveformData)
      this.setState({ frequencyData, waveformData })
      requestAnimationFrame(updateAudioData)
    }

    requestAnimationFrame(updateAudioData)
  }

  render() {
    const {
      frequencyData,
      waveformData,
      currentSong,
      errorMessage,
      history,
      inputUrl,
      queue,
    } = this.state

    return (
      <main className={styles.root}>
        <Sidebar>
          <Tabs>
            <TabList>
              <Tab>Recently played</Tab>
              <Tab>Playback queue</Tab>
            </TabList>
            <TabPanel>
              <TrackList
                tracks={history}
                onTrackDelete={this.deleteFromHistory}
                onTrackQueue={this.addToQueueFromId}
                onTrackSelect={this.playFromHistory}
              />
            </TabPanel>
            <TabPanel>
              <TrackList
                tracks={queue}
                onTrackDelete={this.deleteFromQueue}
                onTrackSelect={this.playFromQueue}
              />
            </TabPanel>
          </Tabs>
        </Sidebar>
        <MainContent>
          <Visualizer
            frequencyData={frequencyData}
            waveformData={waveformData}
          />
          <Player
            errorMessage={errorMessage}
            track={currentSong}
            inputUrl={inputUrl}
            onAudioRender={audioAnalyser => this.setAnalyser(audioAnalyser)}
            onAudioEnded={this.playNextQueued}
            onUrlEdit={trackUrl => this.setInputTrack(trackUrl)}
            onSongSelect={this.loadSong}
          />
        </MainContent>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"))
