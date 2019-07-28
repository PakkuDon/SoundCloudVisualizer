import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const Button = ({ children, className, onClick, title, type }) => (
  <button
    className={classnames(styles.root, className)}
    onClick={onClick}
    title={title}
    type={type}
  >
    {children}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  title: '',
  type: 'button',
}

export default Button
