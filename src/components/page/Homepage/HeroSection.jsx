import React from 'react'
import styles from '@styles/page/homepage.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Button from '@components/ui/Button.jsx'
import gearIcon from '@assets/images/homepage/gear.png'

const HeroSection = () => {
  return (
    <header className={classNames(styles.header)}>
      <div className="container text-white flex items-center justify-start h-full">
        <div className="w-[600px] md:w-full">
          <div
            className={classNames(styles['header-transparent'], 'px-2 inline-flex items-center justify-center py-1')}
          >
            <img src={gearIcon} alt="gear" />
            <p className="text-lg sm:text-base">We Provide Electric Services For Industrial Project</p>
          </div>
          <h1 className="font-bold pb-3 sm:text-2xl sm:pt-3">We Are Professional Quality Services</h1>
          <Link to="/services">
            <Button>Our Services</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
