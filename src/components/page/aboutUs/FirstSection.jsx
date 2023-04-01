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
    <div className="flex items-center w-1/2 py-2">
      <img src={tick} alt={children} />
      <p className="pl-2">{children}</p>
    </div>
  )
}

const Card = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center basis-1/2 text-secondary bg-bg p-8">
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
        <div className="flex gap-32">
          <div className="w-[60%]">
            <Heading title="Welcome to BlueCollar" img={icon} />
            <h2 className="text-secondary w-2/3">We're commited to Quality</h2>
            <p className="text-gray pt-3 pb-10">
              Proactively envisined multimeda based exptis and cross media growth strategies seamlessly visualized
              quality a intellectual capitals withouts superiors collaboration ideas sharing holistically pontificated
              installed base portals after maintainable products.
            </p>

            <div className="flex flex-wrap">
              <TickSection>We provide 24/7 service</TickSection>
              <TickSection>Great technology</TickSection>
              <TickSection>Qualified agents</TickSection>
              <TickSection>35 years experience</TickSection>
            </div>

            <div className="flex gap-4 py-4">
              <img src={sign} alt="signature" className="w-48" />
              <div className="w-[2px] bg-gray bg-opacity-30" />
              <div className="flex flex-col">
                <h6 className="text-secondary">Benjamin Dowd</h6>
                <p className="text-primary">Founder of BlueCollar</p>
              </div>
            </div>

            <div className="flex gap-8 py-4">
              <Button>More About Us</Button>
              <div className="flex flex-col">
                <p className="text-secondary underline underline-offset-[6px]">For Emergency Fixing or Appointment</p>
                <h5 className="text-primary">(03) 123 456 78990</h5>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <img src={hero} alt="hero image" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex gap-10 pt-xxl">
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
