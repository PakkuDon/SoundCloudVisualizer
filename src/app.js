import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import Sidebar from './components/Sidebar'
import TrackList from './components/TrackList'
import MainContent from './components/MainContent'
import NotificationList from './components/NotificationList'
import Visualizer from './components/Visualizer'
import Player from './components/Player'

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

const App = () => (
  <main>
    <Sidebar>
      <TrackList title={'Recently played'} tracks={testState.history} />
      <TrackList title={'Queued'} tracks={testState.playbackQueue} />
    </Sidebar>
    <MainContent>
      <NotificationList notifications={testState.notifications} />
      <Visualizer />
      <Player
        track={testState.playbackQueue[0]}
        inputUrl={testState.playbackQueue[0].permalink_url}
      />
    </MainContent>
  </main>
)

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
)