import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.css"

class Visualizer extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  componentDidMount() {
    this.graphicsContext = this.canvasRef.current.getContext("2d")
    this.graphicsContext.strokeStyle = "#000"
    this.graphicsContext.fillStyle = "#69C"
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
      const barHeight = gridHeight * frequency

      this.graphicsContext.fillRect(
        i * gridWidth,
        height - barHeight,
        gridWidth - 1,
        height,
      )
    }
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        className={styles.root}
        width="500"
        height="500"
      >
        Your browser does not support the HTML5 canvas element.
      </canvas>
    )
  }
}

Visualizer.propTypes = {
  audioData: PropTypes.arrayOf(PropTypes.number),
}

export default Visualizer
