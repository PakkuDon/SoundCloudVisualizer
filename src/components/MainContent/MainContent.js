import React from "react"
import styles from "./MainContent.css"

const MainContent = ({ children }) => (
  <div className={styles.root}>{children}</div>
)

export default MainContent
