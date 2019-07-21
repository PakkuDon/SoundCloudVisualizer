import React, { useState } from 'react'

const Sidebar = (props) => {
  const [isOpen, toggleSidebar] = useState(true)

  return (
    <React.Fragment>
      {isOpen && (
        <div id="sidebar">
          {props.children}
        </div>
      )}
      <button
        className="toggle-sidebar"
        onClick={() => toggleSidebar(!isOpen)}
      >
        &#9664;
      </button>
    </React.Fragment>
  )
}

export default Sidebar
