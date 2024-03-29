import Layout from '@components/ui/Layout'
import image1 from '@assets/images/gallery/1.png'
import image2 from '@assets/images/gallery/2.png'
import image3 from '@assets/images/gallery/3.png'
import image4 from '@assets/images/gallery/4.png'
import image5 from '@assets/images/gallery/5.png'
import image6 from '@assets/images/gallery/6.png'
import bg from '@assets/images/gallery/bg.png'
import BreadCrumb from '@components/ui/BreadCrumb'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export const GalleryCard = ({
  img,
  title,
  description,
  onClick,
  index,
  ...rest
}: {
  img: string
  title: string
  description: string
  index: number
  onClick?: () => void
}) => {
  return (
    <div
      className="p-4 xl:p-2 sm:p-0 sm:pb-3 w-1/3 lg:w-1/2 sm:w-full text-center cursor-pointer"
      onClick={onClick}
      {...rest}
    >
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={index * 80}>
        <div className="p-5 xl:p-2 lg:p-4 xsm:p-2 bg-white h-full border-[1px] border-gray border-opacity-30">
          <img src={img} alt={title} className="w-full h-auto object-cover" />
          <h6 className="text-secondary pt-4 pb-1">{title}</h6>
          <p className="text-gray">{description}</p>
        </div>
      </AnimationOnScroll>
    </div>
  )
}

const Gallery = () => {
  return (
    <Layout title="Gallary">
      <BreadCrumb img={bg} title="Our Projects" />
      <section className="bg-white">
        <div className="container flex flex-wrap justify-around p-xl">
          <GalleryCard title="Electrical & Maintenance" description="House, office" img={image1} index={0} />
          <GalleryCard title="Industry Machine Issue" description="House, Office" img={image2} index={1} />
          <GalleryCard title="Car Repai & Maintenance" description="Car, Bike, Load vehicle" img={image3} index={2} />
          <GalleryCard title="Interior/Exterior Services" description="Installation" img={image4} index={3} />
          <GalleryCard title="Building Installation" description="House, office" img={image5} index={4} />
          <GalleryCard title="Electrical Installation" description="House, office" img={image6} index={5} />
        </div>
      </section>
    </Layout>
  )
}

export default Gallery
