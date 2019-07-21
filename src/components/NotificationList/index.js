import React from 'react'
import PropTypes from 'prop-types'
import IconDelete from '../icons/IconDelete'

const NotificationList = ({ notifications }) => (
  <React.Fragment>
    {notifications.map(notification => (
      <div key={notification} className="message">
        <span>{notification}</span>
        <button className="delete" title="Delete message">
          <IconDelete />
        </button>
      </div>
    ))}
  </React.Fragment>
)

NotificationList.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.string),
}

NotificationList.defaultProps = {
  notifications: [],
}

export default NotificationList
