import React from "react"
import PropTypes from "prop-types"
import styles from "./Icon.css"

const IconPlay = ({ title }) => (
  <svg className={styles.root} viewBox="0 0 50 50">
    <title>{title}</title>
    <polygon points="10,10, 40,25 10,40" />
  </svg>
)

IconPlay.propTypes = {
  title: PropTypes.string,
}

export default IconPlay
