import React from 'react'
import styles from '@styles/ui/ui.module.scss'
import classNames from 'classnames'

const BreadCrumb = ({ title, img }: { title: string; img: string }) => {
  return (
    <section className="w-full h-[435px] lg:h-96 md:h-60 relative -z-10">
      <img src={img} alt={title} className="absolute inset-0 -z-10 object-cover w-full h-full blur-[15px]" />
      <div className={classNames(styles.breadCrumb, 'absolute inset-0 w-full h-full -z-10')}></div>
      <h1 className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
        {title}
      </h1>
    </section>
  )
}

export default BreadCrumb
