import Layout from '@components/ui/Layout'
import image1 from '@assets/images/gallery/1.png'
import image2 from '@assets/images/gallery/2.png'
import image3 from '@assets/images/gallery/3.png'
import image4 from '@assets/images/gallery/4.png'
import image5 from '@assets/images/gallery/5.png'
import image6 from '@assets/images/gallery/6.png'
import bg from '@assets/images/gallery/bg.png'
import BreadCrumb from '@components/ui/BreadCrumb'

const GalleryCard = ({ img, title, description }: { img: string; title: string; description: string }) => {
  return (
    <div className="p-4 xl:p-2 sm:p-0 sm:pb-3 w-1/3 lg:w-1/2 sm:w-full text-center cursor-pointer">
      <div className="p-5 xl:p-2 lg:p-4 xsm:p-2 bg-white h-full">
        <img src={img} alt={title} className="w-full h-auto object-cover" />
        <h6 className="text-secondary pt-4 pb-1">{title}</h6>
        <p className="text-gray">{description}</p>
      </div>
    </div>
  )
}

const Gallery = () => {
  return (
    <Layout title="Gallary">
      <BreadCrumb img={bg} title="Our Projects" />
      <div className="container flex flex-wrap justify-around p-xl">
        <GalleryCard title="Electrical & Maintenance" description="House, office" img={image1} />
        <GalleryCard title="Industry Machine Issue" description="House, Office" img={image2} />
        <GalleryCard title="Car Repai & Maintenance" description="Car, Bike, Load vehicle" img={image3} />
        <GalleryCard title="Interior/Exterior Services" description="Installation" img={image4} />
        <GalleryCard title="Building Installation" description="House, office" img={image5} />
        <GalleryCard title="Electrical Installation" description="House, office" img={image6} />
      </div>
    </Layout>
  )
}

export default Gallery
