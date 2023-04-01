import React from 'react'
import Heading from '../../ui/Heading'
import Button from '../../ui/Button'
import icon from '@assets/images/homepage/icon.png'
import hero from '@assets/images/about-us/hero.png'
import tick from '@assets/images/homepage/tick.png'
import sign from '@assets/images/about-us/sign.png'
import vector1 from '@assets/images/about-us/vector1.png'
import vector2 from '@assets/images/about-us/vector2.png'
import vector3 from '@assets/images/about-us/vector3.png'
import vector4 from '@assets/images/about-us/vector4.png'

const TickSection = ({ children }) => {
  return (
    <div className="flex items-center w-1/2 xxsm:w-full py-2">
      <img src={tick} alt={children} />
      <p className="pl-2">{children}</p>
    </div>
  )
}

const Card = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center basis-[calc(25%_-_32px)] xl:basis-[calc(25%_-_20px)] md:basis-[calc(50%_-_20px)] sm:basis-full text-secondary text-center bg-bg p-8 xl:p-5">
      <img src={img} alt={title} className="w-16 h-auto" />
      <h3 className="py-1">{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

const FirstSection = () => {
  return (
    <section className="bg-white p-xxl">
      <div className="container">
        <div className="flex lg:flex-col gap-32 xl:gap-5">
          <div className="w-[60%] lg:w-full lg:order-2">
            <Heading title="Welcome to BlueCollar" img={icon} />
            <h2 className="text-secondary w-2/3 xl:w-full">We're commited to Quality</h2>
            <p className="text-gray pt-3 pb-10">
              Proactively envisined multimeda based exptis and cross media growth strategies seamlessly visualized
              quality a intellectual capitals withouts superiors collaboration ideas sharing holistically pontificated
              installed base portals after maintainable products.
            </p>

            <div className="flex xxsm:flex-col flex-wrap">
              <TickSection>We provide 24/7 service</TickSection>
              <TickSection>Great technology</TickSection>
              <TickSection>Qualified agents</TickSection>
              <TickSection>35 years experience</TickSection>
            </div>

            <div className="flex xxsm:flex-col xxsm:items-center xxsm:pb-10 gap-4 py-4 lg:py-7 lg:justify-center">
              <img src={sign} alt="signature" className="w-48" />
              <div className="w-[2px] bg-gray bg-opacity-30" />
              <div className="flex flex-col">
                <h6 className="text-secondary">Benjamin Dowd</h6>
                <p className="text-primary">Founder of BlueCollar</p>
              </div>
            </div>

            <div className="flex sm:flex-col sm:items-center gap-8 py-4 lg:justify-center">
              <Button>More About Us</Button>
              <div className="flex flex-col">
                <p className="text-secondary underline underline-offset-[6px]">For Emergency Fixing or Appointment</p>
                <h5 className="text-primary">(03) 123 456 78990</h5>
              </div>
            </div>
          </div>

          <div className="w-[40%] lg:w-full lg:order-1 lg:mb-12">
            <img src={hero} alt="hero image" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-between xl:gap-5 pt-xxl lg:order-3">
          <Card img={vector1} title="1920" desc="Project Completed" />
          <Card img={vector2} title="2500+" desc="Industry Solutions" />
          <Card img={vector3} title="500+" desc="Expert Contractors" />
          <Card img={vector4} title="1k+" desc="Happy Customers" />
        </div>
      </div>
    </section>
  )
}

export default FirstSection
