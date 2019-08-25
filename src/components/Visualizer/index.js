import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

class Visualizer extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  componentDidMount() {
    const graphicsContext = this.canvasRef.current.getContext('2d')
  }

  render() {
    return (
      <div className={styles.root}>
        <canvas ref={this.canvasRef} className={styles.canvas} width="500" height="500">
          Your browser does not support the HTML5 canvas element.
        </canvas>
      </div>
    )
  }
}

Visualizer.propTypes = {

}

export default Visualizer
