import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

function Audio(props) {
  const audioElement = useRef(null)

  useEffect(() => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)()
    if (audioContext) {
      const source = audioContext.createMediaElementSource(audioElement.current)
      const analyser = audioContext.createAnalyser()
      source.connect(analyser)
      analyser.connect(audioContext.destination)
      analyser.fftSize = 256
      props.onRender(analyser)
    }
  }, [])

  const { onEnded, src } = props

  return (
    <audio
      ref={audioElement}
      src={src}
      autoPlay
      crossOrigin="anonymous"
      controls
      onEnded={onEnded}
    >
      Your browser does not support the HTML5 audio element.
    </audio>
  )
}

Audio.propTypes = {
  src: PropTypes.string,
  onEnded: PropTypes.func,
  onRender: PropTypes.func,
}

Audio.defaultProps = {
  onEnded: () => {},
  onRender: () => {},
}

export default Audio
