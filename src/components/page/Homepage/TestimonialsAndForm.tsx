import { useRef, ReactNode } from 'react'
import Heading from '../../ui/Heading'
import icon from '@assets/images/homepage/why-choose-us-icon.png'
import testimonial1 from '@assets/images/homepage/testimonial-person.png'
import gallery1 from '@assets/images/homepage/gallery-1.png'
import gallery2 from '@assets/images/homepage/gallery-2.png'
import quote from '@assets/images/homepage/quote.png'
import dial from '@assets/images/homepage/dial.png'
import brand1 from '@assets/images/homepage/brand-1.png'
import brand2 from '@assets/images/homepage/brand-2.png'
import brand3 from '@assets/images/homepage/brand-3.png'
import brand4 from '@assets/images/homepage/brand-4.png'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Swiper as SwiperType } from 'swiper'

const TestimonialPerson = ({ img, name, desc }: { img: string; name: string; desc: string }) => {
  return (
    <div className="flex justify-center items-center bg-white">
      <img src={img} alt={name} className="w-[70px] sm:w-[50px] h-auto aspect-square object-cover rounded-full" />
      <div className="pl-3">
        <p className="text-secondary font-bold">{name}</p>
        <p className="text-gray text-sm pt-2 xsm:pt-0">{desc}</p>
      </div>
    </div>
  )
}

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return <p className="text-gray italic">{children}</p>
}

const TestimonialsAndForm = () => {
  const swiperRef = useRef<SwiperType>()
  const swiperRef2 = useRef<SwiperType>()
  return (
    <div className="bg-white">
      <div className="container flex lg:flex-col gap-10 pt-40 xl:py-36 lg:py-32 md:py-28 sm:py-24">
        <div className="w-1/2 lg:w-full">
          <Heading img={icon} title="Testimonials" />
          <h3 className="pt-1 pb-5">Customers Say</h3>

          <div className="border-[1px] border-gray border-opacity-30 p-8 sm:p-4 xxsm:p-2 shadow-md">
            <div className="flex justify-between items-center">
              {/**Swiper for person */}
              <Swiper
                cssMode
                direction="vertical"
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                loop
                speed={1000}
                onBeforeInit={swiper => {
                  swiperRef.current = swiper
                }}
                className="w-2/3 m-0 h-[70px]"
              >
                <SwiperSlide>
                  <TestimonialPerson img={testimonial1} name="Nancy Luther" desc="NewYork" />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialPerson img={gallery1} name="Fancy Luther" desc="NewYork" />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialPerson img={gallery2} name="Gandy Luther" desc="NewYork" />
                </SwiperSlide>
              </Swiper>
              <div className="bg-primary w-14 h-14 sm:w-10 sm:h-10 rounded-full flex justify-center items-center">
                <img src={quote} alt="quote" className="sm:w-5 h-auto" />
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray bg-opacity-30 my-7"></div>
            {/**Swiper for testimonials */}
            <Swiper
              cssMode
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              loop
              speed={1000}
              onBeforeInit={swiper => {
                swiperRef2.current = swiper
              }}
            >
              <SwiperSlide>
                <TestimonialText>
                  Pellentesque vehicula eros neque, maximus mattis est sagittis facilisi.{' '}
                  <span className="font-bold text-secondary">”In sed pretium metus”</span>. Ppretium id urna sit amet
                  tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in elementum tristique
                </TestimonialText>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quoLorem ipsum dolor sit amet.
                  Lorem, ipsum.
                  <span className="font-bold text-secondary">”Lorem ipsum dolor sit amet.”</span>. Ppretium id urna sit
                  amet tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in elementum tristique
                </TestimonialText>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nobis consequatur suscipit nisi error
                  et numquam quidem consectetur quae distinctio, excepturi iure saepe inventore ea?
                  <span className="font-bold text-secondary">”Lorem ipsum dolor sit amet.”</span>. Ppretium id urna sit
                  amet tincid
                </TestimonialText>
              </SwiperSlide>
            </Swiper>
            <div className="flex gap-4 pt-5">
              <div
                className="w-11 h-11 rounded-full flex justify-center items-center cursor-pointer bg-bg"
                onClick={() => {
                  swiperRef.current?.slidePrev()
                  swiperRef2.current?.slidePrev()
                }}
              >
                <BsChevronLeft />
              </div>
              <div
                className="w-11 h-11 rounded-full flex justify-center items-center bg-primary cursor-pointer"
                onClick={() => {
                  swiperRef.current?.slideNext()
                  swiperRef2.current?.slideNext()
                }}
              >
                <BsChevronRight />
              </div>
            </div>
          </div>

          <div className="bg-primary p-8 sm:p-4 xxsm:p-2 text-secondary mt-5 shadow-lg">
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
          <form className="p-10 sm:p-5 bg-bg flex flex-col items-stretch h-[calc(100%_-_120px)] shadow-md">
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
