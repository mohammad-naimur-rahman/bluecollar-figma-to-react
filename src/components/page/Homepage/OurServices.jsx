import React from 'react'
import Heading from '../../ui/Heading'
import servicesIcon from '@assets/images/homepage/services-icon.png'

const OurServices = () => {
  return (
    <div className="container py-28">
      <div className="w-[60%] text-center flex flex-col justify-center items-center mx-auto">
        <Heading img={servicesIcon} title="Our Services" bg="bg-white" />
        <h2 className="text-secondary py-3">Our Services</h2>
        <p className="text-gray">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
          pretium id urna sit amet tincidunt.
        </p>
      </div>
    </div>
  )
}

export default OurServices
