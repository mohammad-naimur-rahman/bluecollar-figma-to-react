import classNames from 'classnames'
import React from 'react'

const Input = ({ className, as, ...rest }: { className: string; as: 'textarea' | null }) => {
  if (as === 'textarea') {
    return (
      <textarea
        className={classNames(
          'p-3 mb-6 sm:p-2 sm:mb-4 placeholder:text-gray text-secondary border-[1px] border-gray border-opacity-30 focus:outline-none',
          className
        )}
        {...rest}
      ></textarea>
    )
  }

  return (
    <input
      className={classNames(
        'p-3 mb-6 sm:p-2 sm:mb-4 placeholder:text-gray text-secondary border-[1px] border-gray border-opacity-30 focus:outline-none',
        className
      )}
      {...rest}
    />
  )
}

export default Input
