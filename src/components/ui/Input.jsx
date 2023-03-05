import classNames from 'classnames'
import React from 'react'

const Input = ({ className, as, ...rest }) => {
  if (as === 'textarea') {
    return (
      <textarea
        className={classNames(
          'p-3 mb-6 placeholder:text-gray text-secondary border-[1px] border-gray border-opacity-30 focus:outline-none',
          className
        )}
        {...rest}
      ></textarea>
    )
  }

  return (
    <input
      className={classNames(
        'p-3 mb-6 placeholder:text-gray text-secondary border-[1px] border-gray border-opacity-30 focus:outline-none',
        className
      )}
      {...rest}
    />
  )
}

export default Input
