import React from "react"
import PropTypes from "prop-types"
import styles from "./Icon.css"

const IconDelete = ({ title }) => (
  <svg className={styles.root} viewBox="0 0 50 50">
    <title>{title}</title>
    <line x1="10" y1="10" x2="40" y2="40" />
    <line x1="10" y1="40" x2="40" y2="10" />
  </svg>
)

IconDelete.propTypes = {
  title: PropTypes.string,
}

export default IconDelete
