import BarVisualization from "./BarVisualization"
import WaveformVisualization from "./WaveformVisualization"

const strategies = {
  bar: BarVisualization,
  waveform: WaveformVisualization,
}

export default {
  draw: (selectedVisualizer, ...args) => {
    const visualizer = strategies[selectedVisualizer]
    visualizer.draw(...args)
  },
}
