import React, { ReactNode } from 'react'
import classNames from 'classnames'

const Button = ({
  children,
  className,
  variant = 'primary',
  type = 'button',
  ...rest
}: {
  children: string | ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'white'
}) => {
  return (
    <button
      type={type}
      {...rest}
      className={classNames(
        'px-6 py-4 lg:px-4 lg:py-2 transition-all font-bold border-2 shadow-md',
        {
          'bg-primary  hover:bg-primary-dark text-secondary border-primary': variant === 'primary',
          'bg-secondary hover:bg-secondary-dark text-white border-secondary': variant === 'secondary',
          'bg-white hover:bg-white-dark text-secondary border-primary': variant === 'white'
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
