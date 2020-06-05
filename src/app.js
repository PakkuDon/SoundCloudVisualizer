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

  return (
    <main className={styles.root}>
      <Sidebar>
        <Tabs>
          <TabList>
            <Tab>Recently played</Tab>
            <Tab>Playback queue</Tab>
          </TabList>
          <TabPanel>
            <TrackList tracks={history} />
          </TabPanel>
          <TabPanel>
            <TrackList tracks={playbackQueue} />
          </TabPanel>
        </Tabs>
      </Sidebar>
      <MainContent>
        <Visualizer
          frequencyData={frequencyData}
          waveformData={waveformData}
          selectedVisualizer={selectedVisualizer}
        />
        <Player
          errorMessage={errorMessage}
          track={currentSong}
          inputUrl={inputUrl}
        />
      </MainContent>
    </main>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
