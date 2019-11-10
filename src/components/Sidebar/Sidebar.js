import React, { useState } from "react"
import styles from "./Sidebar.css"

const Sidebar = props => {
  const [isOpen, toggleSidebar] = useState(true)

  return (
    <div className={styles.root}>
      {isOpen && <div className={styles.sidebarWrapper}>{props.children}</div>}
      <button
        className={styles.toggleSidebar}
        onClick={() => toggleSidebar(!isOpen)}
      >
        &#9664;
      </button>
    </div>
  )
}

export default Sidebar
