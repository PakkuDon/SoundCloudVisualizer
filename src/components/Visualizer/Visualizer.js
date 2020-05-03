import React, { Fragment, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styles from "./Visualizer.css"
import Visualization from "../../visualizations"

function Visualizer({
  frequencyData,
  onVisualizerSelect,
  selectedVisualizer,
  waveformData,
}) {
  const canvasElement = useRef(null)

  useEffect(() => {
    Visualization.draw(selectedVisualizer, {
      frequencyData: frequencyData,
      waveformData: waveformData,
      graphicsContext: canvasElement.current.getContext("2d"),
    })
  }, [frequencyData, waveformData, selectedVisualizer])

  return (
    <Fragment>
      <canvas
        ref={canvasElement}
        className={styles.root}
        width="500"
        height="500"
      >
        Your browser does not support the HTML5 canvas element.
      </canvas>
      <div className={styles.options}>
        <label htmlFor="visualizer-type">
          Visualization
          <select
            id="visualizer-type"
            onBlur={(event) => onVisualizerSelect(event.target.value)}
          >
            {Visualization.types().map((type) => (
              <option key={type} selected={type === selectedVisualizer}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
    </Fragment>
  )
}

Visualizer.propTypes = {
  frequencyData: PropTypes.arrayOf(PropTypes.number),
  waveformData: PropTypes.arrayOf(PropTypes.number),
  selectedVisualizer: PropTypes.oneOf(Visualization.types()),
  onVisualizerSelect: PropTypes.func,
}

Visualizer.defaultProps = {
  selectedVisualizer: Visualization.types()[0],
  onVisualizerSelect: () => {},
}

export default Visualizer
