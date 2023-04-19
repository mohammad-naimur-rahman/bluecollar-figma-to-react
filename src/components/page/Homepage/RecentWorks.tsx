import React from 'react'
import Heading from '../../ui/Heading'
import icon from '@assets/images/homepage/why-choose-us-icon.png'
import gallery1 from '@assets/images/homepage/gallery-1.png'
import gallery2 from '@assets/images/homepage/gallery-2.png'
import gallery3 from '@assets/images/homepage/gallery-3.png'
import gallery4 from '@assets/images/homepage/gallery-4.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const GalleryCard = ({
  img,
  title,
  description,
  index
}: {
  img: string
  title: string
  description: string
  index: number
}) => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      delay={index * 100}
      className="p-4 xl:p-2 sm:p-0 sm:pb-3 w-1/4 lg:w-1/2 sm:w-full text-center cursor-pointer shadow-md"
    >
      <div className="p-5 xl:p-2 lg:p-4 xsm:p-2 bg-white h-full">
        <img src={img} alt={title} className="w-full h-auto object-cover" />
        <h6 className="text-secondary pt-4 pb-1">{title}</h6>
        <p className="text-gray">{description}</p>
      </div>
    </AnimationOnScroll>
  )
}

const RecentWorks = () => {
  return (
    <section className="py-40 xl:py-36 lg:py-32 md:py-28 sm:py-24 bg-secondary px-7 lg:px-5 sm:px-3 xxsm:px-2">
      <div className="text-center">
        <Heading img={icon} title="The Gallery" />
      </div>
      <h2 className="text-center text-white pt-3 pb-5">Check Our Recent Works</h2>
      <div className="flex flex-wrap justify-around">
        <GalleryCard title="Electrical & Maintenance" description="Electric, Installation" img={gallery1} index={0} />
        <GalleryCard title="Interior/Exterior Services" description="House, Office" img={gallery2} index={1} />
        <GalleryCard title="Car Repai & Maintenance" description="Car, Bike, Load vehicle" img={gallery3} index={2} />
        <GalleryCard title="Electrical Installation" description="Installation" img={gallery4} index={3} />
      </div>
    </section>
  )
}

export default RecentWorks
