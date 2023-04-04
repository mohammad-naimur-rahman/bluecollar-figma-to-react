import React from 'react'
import Heading from '../../ui/Heading'
import icon from '@assets/images/homepage/services-icon.png'
import expert1 from '@assets/images/about-us/expert1.png'
import expert2 from '@assets/images/about-us/expert2.png'
import expert3 from '@assets/images/about-us/expert3.png'

const Card = ({ img, title, desc }) => {
  return (
    <div className="w-1/3 sm:w-full border-gray border-[1px] border-opacity-30 p-7 lg:p-3 cursor-pointer shadow-md">
      <img src={img} alt={title} />
      <h5 className="text-secondary pt-7 sm:pt-3">{title}</h5>
      <p className="text-gray">{desc}</p>
    </div>
  )
}

const ThirdSection = () => {
  return (
    <div className="p-xl bg-white">
      <div className="container flex flex-col items-center justify-center text-center">
        <Heading img={icon} title="Our Team" />
        <h2 className="text-secondary pt-2 pb-4">Meet Our Experts</h2>
        <p className="text-gray w-2/3">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
          pretium id urna sit amet tincidunt.
        </p>

        <div className="flex sm:flex-col gap-7 lg:gap-3 pt-10 lg:pt-7">
          <Card img={expert1} title="David James" desc="Engineer" />
          <Card img={expert2} title="Kevin Martin" desc="Engineer" />
          <Card img={expert3} title="Sarrah Albert" desc="Engineer" />
        </div>
      </div>
    </div>
  )
}

export default ThirdSection
