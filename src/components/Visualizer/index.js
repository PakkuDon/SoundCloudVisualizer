import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

class Visualizer extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  componentDidMount() {
    this.graphicsContext = this.canvasRef.current.getContext('2d')
    this.graphicsContext.strokeStyle = "#69C"
  }

  componentDidUpdate() {
    const { audioData } = this.props
    const bufferLength = audioData.length

    const width = this.graphicsContext.canvas.width
    const height = this.graphicsContext.canvas.height
    const gridWidth = width / bufferLength
    const gridHeight = height / 256
    this.graphicsContext.clearRect(0, 0, width, height)

    for (let i = 0; i < bufferLength; i++) {
      const frequency = audioData[i]
      const barHeight = height - gridHeight * frequency

      this.graphicsContext.beginPath()
      this.graphicsContext.moveTo(i * gridWidth, barHeight)
      this.graphicsContext.lineTo((i + 1) * gridWidth, barHeight)
      this.graphicsContext.stroke()
      this.graphicsContext.closePath()
    }
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
  audioData: PropTypes.arrayOf(PropTypes.number),
}

export default Visualizer
