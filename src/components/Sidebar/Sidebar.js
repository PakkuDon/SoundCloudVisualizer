import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./Sidebar.css"

const Sidebar = ({ children }) => {
  const [isOpen, toggleSidebar] = useState(true)

  return (
    <div className={styles.root} data-testid="sidebar">
      {isOpen && <div className={styles.sidebarWrapper}>{children}</div>}
      <button
        className={styles.toggleSidebar}
        title="Toggle sidebar"
        onClick={() => toggleSidebar(!isOpen)}
      >
        &#9664;
      </button>
    </div>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node,
}

export default Sidebar
