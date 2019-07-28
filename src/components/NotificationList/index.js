import React from 'react'
import PropTypes from 'prop-types'
import IconDelete from '../icons/IconDelete'
import styles from './styles.css'

const NotificationList = ({ notifications }) => (
  <React.Fragment>
    {notifications.map(notification => (
      <div key={notification} className={styles.root}>
        <span>{notification}</span>
        <button className={styles.delete} title="Delete message">
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
