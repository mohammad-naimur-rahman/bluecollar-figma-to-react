import React from 'react'
import styles from '@styles/ui/ui.module.scss'
import classNames from 'classnames'

const BreadCrumb = ({ title, img }) => {
  return (
    <section className="w-full h-[435px] relative">
      <img src={img} alt={title} className="absolute inset-0 -z-10 object-cover w-full h-full blur-[15px]" />
      <div className={classNames(styles.breadCrumb, 'absolute inset-0 w-full h-full -z-10')}></div>
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white">{title}</h1>
    </section>
  )
}

export default BreadCrumb
