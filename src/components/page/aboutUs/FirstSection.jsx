import React from 'react'
import Heading from '../../ui/Heading'
import icon from '@assets/images/homepage/icon.png'
import hero from '@assets/images/about-us/hero.png'

const FirstSection = () => {
  return (
    <section className="bg-white p-xxl">
      <div className="container">
        <div className="flex">
          <div className="w-[60%]">
            <Heading title="Welcome to BlueCollar" img={icon} />
            <h2 className="text-secondary">We're commited to Quality</h2>
            <p className="text-gray">
              Proactively envisined multimeda based exptis and cross media growth strategies seamlessly visualized
              quality a intellectual capitals withouts superiors collaboration ideas sharing holistically pontificated
              installed base portals after maintainable products.
            </p>
          </div>
          <div className="w-[40%]">
            <img src={hero} alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
