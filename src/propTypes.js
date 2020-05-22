import PropTypes from "prop-types"

export const SoundCloudTrack = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  genre: PropTypes.string,
  permalink_url: PropTypes.string,
  stream_url: PropTypes.string,
  artwork_url: PropTypes.string,
  user: PropTypes.shape({
    permalink_url: PropTypes.string,
    username: PropTypes.string,
  }),
})
