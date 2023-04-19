import { ReactNode } from 'react'
import styles from '@styles/page/homepage.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Button from '@components/ui/Button'
import gearIcon from '@assets/images/homepage/gear.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import hero from '@assets/images/homepage/hero.png'
import hero2 from '@assets/images/homepage/blog-1.png'
import hero3 from '@assets/images/homepage/blog-2.png'

const SliderElement = ({
  headingIcon,
  headingText,
  title,
  img,
  buttonText,
  buttonNavigation
}: {
  headingIcon: string
  headingText: string
  title: string
  img: string
  buttonText: string
  buttonNavigation: string
}) => {
  return (
    <header
      className={classNames(styles.header)}
      style={{
        backgroundImage: `radial-gradient(transparent, #282b35), url(${img})`
      }}
    >
      <div className="container text-white flex items-center justify-start h-full">
        <div className="w-[600px] md:w-full">
          <div
            className={classNames(styles['header-transparent'], 'px-2 inline-flex items-center justify-center py-1')}
          >
            <img src={headingIcon} alt={title} />
            <p className="text-lg sm:text-base">{headingText}</p>
          </div>
          <h1 className="font-bold pb-3 sm:text-2xl sm:pt-3">{title}</h1>
          <Link to={buttonNavigation}>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

const HeroSection = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      loop
      speed={1500}
    >
      <SwiperSlide>
        <SliderElement
          headingIcon={gearIcon}
          headingText="We Provide Electric Services For Industrial Project"
          title="We Are Professional Quality Services"
          buttonNavigation="/services"
          buttonText="Our Services"
          img={hero}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderElement
          headingIcon={gearIcon}
          headingText="We are very approchable for our customers"
          title="Any Questions?"
          buttonNavigation="/contact-us"
          buttonText="Contact Us"
          img={hero2}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderElement
          headingIcon={gearIcon}
          headingText="We are renowned in this industry"
          title="Come to know about us"
          buttonNavigation="/about-us"
          buttonText="About Us"
          img={hero3}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSection
