import classNames from 'classnames'
import React from 'react'
import first from '@assets/images/homepage/first.png'
import second from '@assets/images/homepage/second.png'
import third from '@assets/images/homepage/third.png'
import fourth from '@assets/images/homepage/fourth.png'
import servicesHero from '@assets/images/services/breadcrumb.png'
import Button from '../../ui/Button'
import styles from '@styles/page/homepage.module.scss'
import Heading from '../../ui/Heading'

const NavButton = ({ img, title, className }) => {
  return (
    <div
      className={classNames(
        'flex items-center justify-center px-6 py-2 md:px-4 md:py-1 sm:px-2 cursor-pointer border-2 sm:border-[1px] hover:bg-white hover:border-white transition-all xsm:w-full xsm:mb-2',
        className,
        {
          'border-secondary': !className
        }
      )}
    >
      <img src={img} alt={title} className="w-9 sm:w-6" />
      <p className="pl-2">{title}</p>
    </div>
  )
}

const MainServices = () => {
  return (
    <div className={styles['main-services']}>
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center w-[60%] xl:w-[70%] lg:w-[90%] md:w-full mx-auto pt-20">
          <h2 className="text-secondary">Professional Main Services</h2>
          <p className="text-secondary pt-4 xl:pt-2">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
            pretium id urna sit amet tincidunt.
          </p>

          <div className="flex xsm:flex-col items-center justify-between w-full py-10 xl:py-7">
            <NavButton img={first} title="Commercial" className="bg-white border-2 border-white" />
            <NavButton img={second} title="Residential" className="bg-primary" />
            <NavButton img={third} title="Industrial" className="bg-primary" />
          </div>
        </div>

        <div className="container bg-white p-10 xl:p-8 md:p-5 xsm:p-3 flex lg:flex-col justify-between">
          <div className="w-[60%] lg:w-full lg:order-2 lg:mt-5">
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
          <img src={servicesHero} alt="Services" className="w-[40%] lg:w-full lg:order-1" />
        </div>
      </div>
    </div>
  )
}

export default MainServices
