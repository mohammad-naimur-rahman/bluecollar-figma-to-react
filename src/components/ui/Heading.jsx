import classNames from 'classnames'
import React from 'react'

const Heading = ({ img, title, className, textClassName, imageSize = 'w-5', bg }) => {
  return (
    <div
      className={classNames(
        className,
        bg,
        {
          'bg-bg': !bg
        },
        'inline-flex px-5 py-2 justify-center items-center'
      )}
    >
      <img src={img} alt={title} className={imageSize} />
      <p className={classNames(textClassName, 'text-secondary pl-2')}>{title}</p>
    </div>
  )
}

export default Heading
