import React from "react"
import PropTypes from "prop-types"
import styles from "./MainContent.css"

const MainContent = ({ children }) => (
  <div className={styles.root}>{children}</div>
)

MainContent.propTypes = {
  children: PropTypes.node,
}

export default MainContent
