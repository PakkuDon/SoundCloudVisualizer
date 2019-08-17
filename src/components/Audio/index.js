import React from 'react'
import PropTypes from 'prop-types'

class Audio extends React.Component {
  constructor(props) {
    super(props)
    this.audioRef = React.createRef()
  }

  componentDidMount() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)
    if (audioContext) {
      const source = audioContext.createMediaElementSource(this.audioRef.current)
      const analyser = audioContext.createAnalyser()
      source.connect(analyser)
      analyser.connect(audioContext.destination)
      this.props.onRender(analyser)
    }
  }

  render() {
    const { src } = this.props

    return (
      <audio ref={this.audioRef} src={src} autoPlay crossOrigin="anonymous" controls>
        Your browser does not support the HTML5 audio element.
      </audio>
    )
  }
}

Audio.propTypes = {
  src: PropTypes.string,
  onRender: PropTypes.func,
}

Audio.defaultProps = {
  onRender: () => {},
}

export default Audio
