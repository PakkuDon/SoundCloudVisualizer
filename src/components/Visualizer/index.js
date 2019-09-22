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
  }

  componentDidUpdate() {
    Visualization.draw("bar", {
      frequencyData: this.props.frequencyData,
      waveformData: this.props.waveformData,
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
  frequencyData: PropTypes.arrayOf(PropTypes.number),
  waveformData: PropTypes.arrayOf(PropTypes.number),
}

export default Visualizer
