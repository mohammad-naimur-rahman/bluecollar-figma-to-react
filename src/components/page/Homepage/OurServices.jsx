import React from 'react'
import Heading from '../../ui/Heading'
import servicesIcon from '@assets/images/homepage/services-icon.png'
import serviceCard1 from '@assets/images/homepage/service-card-1.png'
import serviceCard2 from '@assets/images/homepage/service-card-2.png'
import serviceCard3 from '@assets/images/homepage/service-card-3.png'
import serviceCard4 from '@assets/images/homepage/service-card-4.png'
import serviceCard5 from '@assets/images/homepage/service-card-5.png'
import serviceCard6 from '@assets/images/homepage/service-card-6.png'

const services = [
  {
    id: 1,
    title: 'Air Condition Service',
    img: serviceCard1
  },
  {
    id: 2,
    title: 'Electrical Installation',
    img: serviceCard2
  },
  {
    id: 3,
    title: 'General Builder',
    img: serviceCard3
  },
  {
    id: 4,
    title: 'Security System',
    img: serviceCard4
  },
  {
    id: 5,
    title: 'Service & Maintenance',
    img: serviceCard5
  },
  {
    id: 6,
    title: 'House Extensions',
    img: serviceCard6
  }
]

const OurServices = () => {
  return (
    <div className="container py-28 xl:py-24 lg:py-20 md:py-16 sm:py-12">
      <div className="w-[60%] text-center flex flex-col justify-center items-center mx-auto">
        <Heading img={servicesIcon} title="Our Services" bg="bg-white" />
        <h2 className="text-secondary py-3">Our Services</h2>
        <p className="text-gray">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
          pretium id urna sit amet tincidunt.
        </p>
      </div>

      <div className="flex flex-wrap justify-center my-9 gap-6 lg:gap-3">
        {services.map(({ id, img, title }) => (
          <section
            key={id}
            className="w-[calc(33%_-_12px)] lg:w-[calc(33%_-_6px)] xl:w-[30%] px-9 py-12 lg:px-5 lg:py-5 bg-secondary flex flex-col items-start justify-between"
          >
            <div>
              <img src={img} alt={title} className="w-12 h-auto" />
              <h5 className="text-primary py-2">{title}</h5>
              <p className="text-white-dark">
                Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.
              </p>
            </div>
            <button className="text-white pt-5 font-bold">Read More</button>
          </section>
        ))}
      </div>
    </div>
  )
}

export default OurServices
