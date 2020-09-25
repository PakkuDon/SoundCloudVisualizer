import BarVisualization from "./BarVisualization"
import NullVisualization from "./NullVisualization"
import WaveformVisualization from "./WaveformVisualization"

const strategies = {
  none: NullVisualization,
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
