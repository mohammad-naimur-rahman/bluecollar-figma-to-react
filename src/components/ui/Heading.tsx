import classNames from 'classnames'
import React from 'react'

const Heading = ({
  img,
  title,
  className,
  textClassName,
  imageSize = 'w-5',
  bg
}: {
  img: string
  title: string
  className: string
  textClassName: string
  imageSize: 'w-5' | string
  bg: string
}) => {
  return (
    <div
      className={classNames(
        className,
        bg,
        {
          'bg-bg': !bg
        },
        'inline-flex px-5 lg:px-2 py-2 lg:py-1 justify-center items-center shadow-md'
      )}
    >
      <img src={img} alt={title} className={imageSize} />
      <p className={classNames(textClassName, 'text-secondary pl-2')}>{title}</p>
    </div>
  )
}

export default Heading
