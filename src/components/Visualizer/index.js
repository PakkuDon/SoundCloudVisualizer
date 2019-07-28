import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Visualizer = (props) => (
  <React.Fragment>
    <div className={styles.root}>
      <canvas className={styles.canvas} width="500" height="500">
        Your browser does not support the HTML5 canvas element.
      </canvas>
    </div>
    <div className={styles.options}>
      <label>
        Visualizer: <select></select>
      </label>
    </div>
  </React.Fragment>
)

Visualizer.propTypes = {

}

export default Visualizer
