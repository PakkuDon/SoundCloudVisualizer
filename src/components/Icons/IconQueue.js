import React from "react"
import styles from "./styles.css"

const IconQueue = () => (
  <svg className={styles.root} style={{ fill: "none" }} viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="20" />
    <line x1="25" y1="10" x2="25" y2="25" />
    <line x1="25" y1="25" x2="40" y2="25" />
  </svg>
)

export default IconQueue
