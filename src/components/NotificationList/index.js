import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import IconDelete from '../icons/IconDelete'
import styles from './styles.css'

const NotificationList = ({ notifications }) => (
  <React.Fragment>
    {notifications.map(notification => (
      <div key={notification} className={styles.root}>
        <span>{notification}</span>
        <Button className={styles.delete} title="Delete message">
          <IconDelete />
        </Button>
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
