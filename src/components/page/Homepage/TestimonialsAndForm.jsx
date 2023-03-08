import React from 'react'
import Heading from '../../ui/Heading'
import icon from '@assets/images/homepage/why-choose-us-icon.png'
import testimonial1 from '@assets/images/homepage/testimonial-person.png'
import quote from '@assets/images/homepage/quote.png'
import dial from '@assets/images/homepage/dial.png'
import brand1 from '@assets/images/homepage/brand-1.png'
import brand2 from '@assets/images/homepage/brand-2.png'
import brand3 from '@assets/images/homepage/brand-3.png'
import brand4 from '@assets/images/homepage/brand-4.png'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

const TestimonialsAndForm = () => {
  return (
    <div className="bg-white">
      <div className="container flex lg:flex-col gap-10 pt-40 xl:py-36 lg:py-32 md:py-28 sm:py-24">
        <div className="w-1/2 lg:w-full">
          <Heading img={icon} title="Testimonials" />
          <h3 className="pt-1 pb-5">Customers Say</h3>

          <div className="border-[1px] border-gray border-opacity-30 p-8">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center">
                <img src={testimonial1} alt="Nancy Luther" className="w-[70px] h-auto" />
                <div className="pl-3">
                  <p className="text-secondary font-bold">Nancy Luther</p>
                  <p className="text-gray text-sm pt-2">NewYork</p>
                </div>
              </div>
              <div className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
                <img src={quote} alt="quote" />
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray bg-opacity-30 my-7"></div>
            <p className="text-gray italic">
              Pellentesque vehicula eros neque, maximus mattis est sagittis facilisi.{' '}
              <span className="font-bold text-secondary">”In sed pretium metus”</span>. Ppretium id urna sit amet
              tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in elementum tristique
            </p>
            <div className="flex gap-4 pt-5">
              <div className="w-11 h-11 rounded-full flex justify-center items-center cursor-pointer bg-bg">
                <BsChevronLeft />
              </div>
              <div className="w-11 h-11 rounded-full flex justify-center items-center bg-primary cursor-pointer">
                <BsChevronRight />
              </div>
            </div>
          </div>

          <div className="bg-primary p-8 text-secondary mt-5">
            <Heading img={icon} title="Any Question" />
            <h5 className="pt-4 pb-4">99.9% Customer Satisfation Based</h5>
            <p>If you have any questions or need help contact with our team, or call</p>

            <div className="flex items-center pt-3">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white">
                <img src={dial} alt="dial" />
              </div>
              <h5 className="text-white pl-3">(003) 123 456 7890</h5>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:w-full lg:pt-10">
          <Heading img={icon} title="Meet Us" />
          <h3 className="pt-1 pb-5">Appointment Form</h3>
          <form className="p-10 sm:p-5 bg-bg flex flex-col items-stretch h-[calc(100%_-_120px)]">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Email Address" />
            <Input type="text" placeholder="Phone Number" />
            <Input type="date" placeholder="Date" />
            <Input as="textarea" placeholder="Service Description" className="h-52" />
            <Button variant="primary">Submit</Button>
          </form>
        </div>
      </div>
      <div className="container pt-20 xl:pt-10 pb-40 xl:pb-20">
        <div className="flex flex-col justify-center">
          <Heading img={icon} title="Clients" className="self-center" />
          <h3 className="text-secondary text-center py-5">Our Trusted Clients</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <img className="h-12 lg:h-10 md:h-8 w-auto mx-3 my-5" src={brand1} alt="Brand 1" />
          <img className="h-12 lg:h-10 md:h-8 w-auto mx-3 my-5" src={brand2} alt="Brand 2" />
          <img className="h-12 lg:h-10 md:h-8 w-auto mx-3 my-5" src={brand3} alt="Brand 3" />
          <img className="h-12 lg:h-10 md:h-8 w-auto mx-3 my-5" src={brand4} alt="Brand 4" />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsAndForm
