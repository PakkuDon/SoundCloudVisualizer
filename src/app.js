import React, { useCallback, useState, useReducer } from "react"
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

function App() {
  const [history, setHistory] = useState([])
  const [playbackQueue, setPlaybackQueue] = useState([])
  const [frequencyData, setFrequencyData] = useState([])
  const [waveformData, setWaveformData] = useState([])
  const [currentSong, setCurrentSong] = useState()
  const [selectedVisualizer, setSelectedVisualizer] = useState("bar")
  const [errorMessage, setErrorMessage] = useState("")
  const [inputUrl, setInputUrl] = useState("")
  const [audioAnalyser, setAudioAnalyser] = useState()

  const loadSong = useCallback(() => {
    setErrorMessage("")
    SoundCloudClient.resolve(inputUrl)
      .then((response) => {
        if (Array.isArray(response)) {
          if (!currentSong) {
            const firstTrack = response.shift()
            playSong(firstTrack)
          }
          setPlaybackQueue([...playbackQueue, ...response.reverse()])
        } else {
          if (!currentSong) {
            playSong(response)
          } else {
            setPlaybackQueue([...playbackQueue, response])
          }
        }
      })
      .catch((error) => {
        setErrorMessage(error.message)
      })
  }, [currentSong, playbackQueue, inputUrl, playSong])

  const deleteFromHistory = useCallback(
    (trackId) => {
      setHistory(history.filter((track) => track.id !== trackId))
    },
    [history],
  )

  const addToQueueFromId = useCallback(
    (trackId) => {
      const selectedSong = history.find((track) => track.id === trackId)
      setPlaybackQueue([...playbackQueue, selectedSong])
    },
    [history, playbackQueue],
  )

  const playFromHistory = useCallback(
    (trackId) => {
      const selectedSong = history.find((track) => track.id === trackId)
      playSong(selectedSong)
    },
    [history, playSong],
  )

  const playSong = useCallback(
    (selectedSong) => {
      setCurrentSong(selectedSong)
      setHistory([
        ...history.filter((track) => track.id !== selectedSong.id),
        selectedSong,
      ])
    },
    [history],
  )

  const deleteFromQueue = useCallback(
    (trackId) => {
      setPlaybackQueue(playbackQueue.filter((track) => track.id !== trackId))
    },
    [playbackQueue],
  )

  const playFromQueue = useCallback(
    (trackId) => {
      const selectedSong = playbackQueue.find((track) => track.id === trackId)
      playSong(selectedSong)
      deleteFromQueue(trackId)
    },
    [playbackQueue, playSong, deleteFromQueue],
  )

  const playNextQueued = useCallback(() => {
    if (playbackQueue.length > 0) {
      playSong(playbackQueue[0])
      setPlaybackQueue(playbackQueue.slice(1))
    } else {
      setCurrentSong(null)
    }
  }, [playbackQueue, setCurrentSong, setPlaybackQueue, playSong])

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
              onTrackDelete={deleteFromHistory}
              onTrackQueue={addToQueueFromId}
              onTrackSelect={playFromHistory}
            />
          </TabPanel>
          <TabPanel>
            <TrackList
              tracks={playbackQueue}
              onTrackDelete={deleteFromQueue}
              onTrackSelect={playFromQueue}
            />
          </TabPanel>
        </Tabs>
      </Sidebar>
      <MainContent>
        <Visualizer
          frequencyData={frequencyData}
          waveformData={waveformData}
          selectedVisualizer={selectedVisualizer}
          onVisualizerSelect={(visualizer) => setSelectedVisualizer(visualizer)}
        />
        <Player
          errorMessage={errorMessage}
          track={currentSong}
          inputUrl={inputUrl}
          onUrlEdit={(trackUrl) => setInputUrl(trackUrl)}
          onSongSelect={loadSong}
          onAudioRender={(audioAnalyser) => setAudioAnalyser(audioAnalyser)}
          onAudioEnded={playNextQueued}
        />
      </MainContent>
    </main>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
