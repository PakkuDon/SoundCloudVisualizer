import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.css"
import Visualization from "../../visualizations"

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
    Visualization.draw({
      audioData: this.props.audioData,
      graphicsContext: this.graphicsContext,
    })
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
