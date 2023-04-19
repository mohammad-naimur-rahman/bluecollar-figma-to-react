import Heading from '@components/ui/Heading'
import logo from '@assets/images/homepage/why-choose-us-icon.png'
import { AccordionContent, AccordionItem, AccordionTitle, Accordions } from '../../lib/Accordions'
import { RxCaretRight } from 'react-icons/rx'
import bg from '@assets/images/services/bg.png'
import tick from '@assets/images/homepage/tick.png'
import howWeWork from '@assets/images/services/how-we-works.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const tickItems = [
  'Telecom Installation and Repair',
  'Hosted PBX Solutions',
  'Outdoor/Parking Lot Lighting',
  'Outlets, Circuits and Rewiring',
  'HID Lighting and Control',
  'Lighting Design',
  'Motors and Transformers',
  'Isolated Computer Circuits',
  'Data/Communications Cabling',
  'Ballast/Lamp Replacing'
]

const Tick = ({ title, index }: { title: string; index: number }) => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInRight"
      duration={0.3}
      offset={50}
      delay={index * 50}
      className="flex items-center pb-5 w-1/2 pr-[10%] sm:w-full sm:pr-0"
    >
      <img src={tick} alt="tick" className="w-6 h-6 aspect-square object-cover" />
      <p className="text-gray pl-4">{title}</p>
    </AnimationOnScroll>
  )
}

const LastSection = () => {
  return (
    <section className="p-xxl container">
      <div>
        <div className="text-center">
          <Heading title="our Services" img={logo} />
        </div>
        <div className="text-center">
          <h2 className="text-secondary py-2">How We Work</h2>
          <p className="text-gray w-2/3 lg:w-full mx-auto">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
            pretium id urna sit amet tincidunt.
          </p>
        </div>

        <div className="flex lg:flex-col pt-md">
          {/*Left Side */}
          <div className="w-1/4 xl:w-2/5 lg:w-full lg:order-2">
            <Accordions className="lg:mt-5">
              <AccordionItem className="bg-white mb-2 shadow-none p-0">
                <AccordionTitle
                  className="bg-primary px-3 py-2"
                  arrowKey={<RxCaretRight />}
                  arrowKeyClassName="text-3xl"
                >
                  Commercial Services
                </AccordionTitle>
                <AccordionContent className="text-sm text-gray">
                  <p className="p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="bg-white mb-2 shadow-none p-0">
                <AccordionTitle className="px-3 py-2" arrowKey={<RxCaretRight />} arrowKeyClassName="text-3xl">
                  Commercial Services
                </AccordionTitle>
                <AccordionContent className="text-sm text-gray">
                  <p className="p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="bg-white mb-2 shadow-none p-0">
                <AccordionTitle className="px-3 py-2" arrowKey={<RxCaretRight />} arrowKeyClassName="text-3xl">
                  Commercial Services
                </AccordionTitle>
                <AccordionContent className="text-sm text-gray">
                  <p className="p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordions>

            <div className="px-5 py-8 text-center flex flex-col w-full items-center justify-center text-white font-bold relative overflow-hidden">
              <div className="absolute inset-0 w-full h-full -z-10 blur-[3px]">
                <img src={bg} alt="how we work" className="absolute inset-0 w-full h-full object-cover" />
                <div className="bg-secondary bg-opacity-80 absolute inset-0 w-full h-full"></div>
              </div>
              <p>Providing Varity</p>
              <p>Electrical Services</p>
              <div className="bg-primary text-secondary my-4 py-2 px-5">
                <p className="font-normal">Discount 25%</p>
                <p>Rewiring Services</p>
              </div>
              <p>Click to Get Discount</p>
            </div>
          </div>

          {/*Right Side */}
          <div className="w-3/4 xl:w-3/5 lg:w-full lg:order-1 ml-10 lg:ml-0">
            <h4 className="text-secondary">We can help you with the following services:</h4>
            <p className="text-gray">
              Pellentesque vehicula eros neque, maximus mattisin sagittis Nulla facilisi. In sed pretium metus Proin
              pretium id urna Interdum et malesuada.
            </p>
            <img src={howWeWork} alt="We can help you with the following services" className="w-full py-8" />

            <div className="flex flex-wrap">
              {tickItems.map((tickItem, i) => (
                <Tick key={tickItem} title={tickItem} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LastSection
