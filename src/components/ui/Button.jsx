import React from 'react'
import classNames from 'classnames'

const Button = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={classNames('bg-secondary px-6 py-4 text-white font-medium', className)}>
      {children}
    </button>
  )
}

export default Button
