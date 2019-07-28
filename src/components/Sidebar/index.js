import React, { useState } from 'react'
import styles from './styles.css'

const Sidebar = (props) => {
  const [isOpen, toggleSidebar] = useState(true)

  return (
    <React.Fragment>
      {isOpen && (
        <div className={styles.root}>
          {props.children}
        </div>
      )}
      <button
        className={styles.toggleSidebar}
        onClick={() => toggleSidebar(!isOpen)}
      >
        &#9664;
      </button>
    </React.Fragment>
  )
}

export default Sidebar
