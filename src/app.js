import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import Sidebar from './components/Sidebar'

const App = () => (
  <main>
    <Sidebar>
      <div>History</div>
      <div>Playback queue</div>
    </Sidebar>
  </main>
)

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
)
