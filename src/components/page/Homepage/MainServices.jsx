import classNames from 'classnames'
import React from 'react'
import first from '@assets/images/homepage/first.png'
import second from '@assets/images/homepage/second.png'
import third from '@assets/images/homepage/third.png'
import fourth from '@assets/images/homepage/fourth.png'
import servicesHero from '@assets/images/homepage/services-hero.png'
import Button from '../../ui/Button'
import styles from '@styles/page/homepage.module.scss'
import Heading from '../../ui/Heading'

const NavButton = ({ img, title, className }) => {
  return (
    <div
      className={classNames(
        'flex items-center justify-center px-6 py-2 cursor-pointer border-2 hover:bg-white hover:border-white transition-all',
        className,
        {
          'border-secondary': !className
        }
      )}
    >
      <img src={img} alt={title} className="w-9" />
      <p className="pl-2">{title}</p>
    </div>
  )
}

const MainServices = () => {
  return (
    <div className={styles['main-services']}>
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center w-[60%] xl:w-[70%] mx-auto pt-20">
          <h2 className="text-secondary">Professional Main Services</h2>
          <p className="text-secondary pt-4 xl:pt-2">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
            pretium id urna sit amet tincidunt.
          </p>

          <div className="flex items-center justify-between w-full py-10 xl:py-7">
            <NavButton img={first} title="Commercial" className="bg-white border-2 border-white" />
            <NavButton img={second} title="Residential" className="bg-primary" />
            <NavButton img={third} title="Industrial" className="bg-primary" />
          </div>
        </div>

        <div className="container bg-white p-10 xl:p-8 flex justify-between">
          <div className="w-[60%]">
            <Heading img={fourth} title="Based on Commercial" className="mb-2" />
            <h3>Commercial</h3>
            <p className="pt-2 pb-4 text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna
              aliqua. Ut enim ad minimquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="pb-6 text-gray">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button variant="primary">Read More</Button>
          </div>
          <img src={servicesHero} alt="Services" className="w-[40%] grayscale hover:grayscale-0 transition-all" />
        </div>
      </div>
    </div>
  )
}

export default MainServices
