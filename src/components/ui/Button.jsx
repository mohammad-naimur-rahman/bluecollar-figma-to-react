import React from 'react'
import classNames from 'classnames'

const Button = ({ children, className, variant = 'primary', ...rest }) => {
  return (
    <button
      {...rest}
      className={classNames(
        'px-6 py-4 transition-all font-bold',
        {
          'bg-primary  hover:bg-primary-dark text-secondary': variant === 'primary',
          'bg-secondary hover:bg-secondary-dark text-white': variant === 'secondary'
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
