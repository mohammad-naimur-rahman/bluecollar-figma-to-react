import React from 'react'
import classNames from 'classnames'

const Button = ({ children, className, variant = 'primary', ...rest }) => {
  return (
    <button
      {...rest}
      className={classNames(
        'px-6 py-4 font-medium transition-all',
        {
          'bg-primary text-secondary hover:bg-primary-dark': variant === 'primary',
          'bg-secondary text-white hover:bg-secondary-dark': variant === 'secondary'
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
