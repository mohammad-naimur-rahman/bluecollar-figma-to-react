import bg from '@assets/images/pricing/bg.jpg'
import BreadCrumb from '@components/ui/BreadCrumb'
import Heading from '@components/ui/Heading'
import Layout from '@components/ui/Layout'
import icon from '@assets/images/homepage/services-icon.png'
import { ReactNode } from 'react'
import Button from '@components/ui/Button'
import { FaClock, FaUser } from 'react-icons/fa'
import { ContactForm } from './FAQ'

const FirstCard = ({
  icon,
  title,
  desc,
  buttonText
}: {
  icon: ReactNode
  title: string
  desc: string
  buttonText: string
}) => {
  return (
    <div className="flex flex-col items-center bg-primary p-10 lg:p-5 md:w-full">
      <span className="text-secondary text-4xl mb-3">{icon}</span>
      <p className="font-bold text-secondary">{title}</p>
      <h6 className="text-white py-3">{desc}</h6>
      <Button variant="secondary" className="!py-2 mt-3">
        {buttonText}
      </Button>
    </div>
  )
}

const CardContent = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="text-base py-1 w-72 lg:w-54 md:w-full">
      <p className="text-primary">{title}:</p>
      <p className="text-white py-1">{desc}</p>
      <div className="w-full h-[1px] bg-white mt-2 mb-1" />
    </div>
  )
}

const Contactus = () => {
  return (
    <Layout title="Contact Us">
      <BreadCrumb img={bg} title="Contact Us" />
      <section className="bg-white p-xl">
        <div className="container">
          <div className="max-w-[640px] mx-auto flex flex-col items-center text-center">
            <Heading title="Quick Contact" img={icon} />
            <h3 className="text-secondary py-3">Contact Details</h3>
            <p className="text-gray">
              Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
              pretium id urna sit amet tincidunt.
            </p>
          </div>

          <div className="flex md:flex-col items-center justify-center pt-md">
            <FirstCard icon={<FaClock />} title="Emergency Works" desc="(003) 123 456 7890" buttonText="Call Us" />
            <div className="flex flex-col items-center bg-secondary p-10 lg:p-5 md:w-full">
              <p className="font-bold text-primary pb-5">Main Branch</p>
              <CardContent title="Address" desc="Amsterdam, 109-74" />
              <CardContent title="Phone" desc="+01 569 896 654" />
              <CardContent title="Mail " desc="info@example.com" />
            </div>
            <FirstCard icon={<FaUser />} title="Have a question?" desc="(003) 123 456 7890" buttonText="Reach Us" />
          </div>
        </div>
      </section>
      <ContactForm />
    </Layout>
  )
}

export default Contactus
