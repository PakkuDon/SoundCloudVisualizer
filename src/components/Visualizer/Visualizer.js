import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styles from "./Visualizer.css"
import Visualization from "../../visualizations"

function Visualizer(props) {
  const canvasElement = useRef(null)

  useEffect(() => {
    Visualization.draw("bar", {
      frequencyData: props.frequencyData,
      waveformData: props.waveformData,
      graphicsContext: canvasElement.current.getContext("2d"),
    })
  }, [props.frequencyData, props.waveformData])

  return (
    <canvas
      ref={canvasElement}
      className={styles.root}
      width="500"
      height="500"
    >
      Your browser does not support the HTML5 canvas element.
    </canvas>
  )
}

Visualizer.propTypes = {
  frequencyData: PropTypes.arrayOf(PropTypes.number),
  waveformData: PropTypes.arrayOf(PropTypes.number),
}

export default Visualizer
