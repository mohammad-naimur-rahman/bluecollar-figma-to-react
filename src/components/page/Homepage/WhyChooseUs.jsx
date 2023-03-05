import React from 'react'
import whyChooseUsImg from '@assets/images/homepage/why-choose-us.png'
import whyChooseUsIcon from '@assets/images/homepage/why-choose-us-icon.png'
import tick from '@assets/images/homepage/tick.png'
import Heading from '../../ui/Heading'

const TickSection = ({ title }) => {
  return (
    <div className="flex justify-start items-start pb-4">
      <img src={tick} alt="tick" className="w-8 h-auto mt-1" />
      <div className="flex flex-col ml-3">
        <h6 className="text-secondary">{title}</h6>
        <p className="text-gray">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium
        </p>
      </div>
    </div>
  )
}

const StatisticsCard = ({ qty, title }) => {
  return (
    <div className="flex mb-6 last:mb-0 border-2 border-white">
      <div className="bg-primary">
        <p className="py-4 px-6 font-bold min-w-[90px] text-center">{qty}</p>
      </div>
      <p className="py-4 px-6 text-white min-w-[250px]">{title}</p>
    </div>
  )
}

const WhyChooseUs = () => {
  return (
    <div className="flex bg-white">
      <div className="w-[45%] relative">
        <img src={whyChooseUsImg} alt="Statistics" className="h-full w-auto object-cover" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  px-28 py-44 bg-secondary bg-opacity-70 backdrop-blur-md">
          <StatisticsCard qty={3956} title="Projects Done" />
          <StatisticsCard qty={851} title="People Working" />
          <StatisticsCard qty={265} title="Business Partners" />
          <StatisticsCard qty="854+" title="Happy Customers" />
        </div>
      </div>
      <div className="w-[55%]">
        <div className="w-[645px] pl-20 py-36">
          <Heading img={whyChooseUsIcon} title="Why Choose Us" />
          <h2 className="text-secondary">Few Reasons Why You Should Choose Us</h2>
          <p className="text-gray py-3">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
            pretium id urna sit amet tincidunt. Interdum et malesuada.{' '}
          </p>
          <TickSection title="35 Years Experience" />
          <TickSection title="Excellencee Certificate" />
          <TickSection title="Affordable Price" />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
