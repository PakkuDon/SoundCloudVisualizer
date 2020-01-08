import BarVisualization from "./BarVisualization"
import WaveformVisualization from "./WaveformVisualization"

const strategies = {
  bar: BarVisualization,
  waveform: WaveformVisualization,
}

export default {
  types: () => Object.keys(strategies),
  draw: (selectedVisualizer, ...args) => {
    const visualizer = strategies[selectedVisualizer]
    visualizer.draw(...args)
  },
}
