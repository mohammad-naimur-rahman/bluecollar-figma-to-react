import React from 'react'
import Heading from '../../ui/Heading'
import icon from '@assets/images/homepage/why-choose-us-icon.png'
import testimonial1 from '@assets/images/homepage/testimonial-person.png'
import quote from '@assets/images/homepage/quote.png'
import dial from '@assets/images/homepage/dial.png'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

const TestimonialsAndForm = () => {
  return (
    <div className="bg-white">
      <div className="container flex gap-10 py-40">
        <div className="w-1/2">
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
        <div className="w-1/2">
          <Heading img={icon} title="Meet Us" />
          <h3 className="pt-1 pb-5">Appointment Form</h3>
          <form className="p-10 bg-bg flex flex-col items-stretch h-[calc(100%_-_120px)]">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Email Address" />
            <Input type="text" placeholder="Phone Number" />
            <Input type="date" placeholder="Date" />
            <Input as="textarea" placeholder="Service Description" className="h-52" />
            <Button variant="primary">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsAndForm
