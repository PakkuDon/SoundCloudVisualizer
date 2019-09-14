import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.css"

const MainContent = ({ children }) => (
  <div className={styles.root}>{children}</div>
)

export default MainContent
