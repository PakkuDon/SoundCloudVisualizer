import React from 'react'
import PropTypes from 'prop-types'

const Audio = ({ src }) => (
  <audio src={src} autoPlay crossOrigin="anonymous" controls>
    Your browser does not support the HTML5 audio element.
  </audio>
)

Audio.propTypes = {
  src: PropTypes.string,
}

export default Audio
