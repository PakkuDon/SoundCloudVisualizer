import React from 'react'

const Sidebar = (props) => (
  <React.Fragment>
    <input id="toggle-sidebar" type="checkbox" />
    <div id="sidebar">
      {props.children}
    </div>
    <label for="toggle-sidebar">&#9664;</label>
  </React.Fragment>
)

export default Sidebar
