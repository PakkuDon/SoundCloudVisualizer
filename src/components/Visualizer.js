import React from 'react'
import PropTypes from 'prop-types'

const Visualizer = (props) => (
  <React.Fragment>
    <div id="canvas-panel">
      <canvas width="500" height="500">
        Your browser does not support the HTML5 canvas element.
      </canvas>
    </div>
    <div id="visualizer-options">
      <label>
        Visualizer: <select></select>
      </label>
    </div>
  </React.Fragment>
)

Visualizer.propTypes = {

}

export default Visualizer
