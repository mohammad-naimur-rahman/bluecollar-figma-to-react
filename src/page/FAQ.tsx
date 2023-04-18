import bg from '@assets/images/pricing/bg.jpg'
import icon from '@assets/images/homepage/services-icon.png'
import Layout from '@components/ui/Layout'
import BreadCrumb from '@components/ui/BreadCrumb'
import Heading from '@components/ui/Heading'
import { AccordionContent, AccordionItem, AccordionTitle, Accordions } from '@components/lib/Accordions'
import { RxCaretRight } from 'react-icons/rx'
import Input from '@components/ui/Input'
import Button from '@components/ui/Button'

export const ContactForm = () => {
  return (
    <section className="container p-lg">
      <div className="flex flex-col text-center">
        <Heading img={icon} title="Contact Us" className="self-center" bg="bg-white" />
        <h2 className="text-secondary py-3">Get In Touch</h2>
      </div>

      <form className="container max-w-[1200px]">
        <div className="flex gap-5 sm:gap-0 sm:flex-col">
          <Input placeholder="Your Name" className="w-1/2 sm:w-full" />
          <Input placeholder="Your Email" type="email" className="w-1/2 sm:w-full" />
        </div>
        <div className="flex gap-5 sm:gap-0 sm:flex-col">
          <Input placeholder="Phone Number" className="w-1/2 sm:w-full" />
          <Input placeholder="Website" className="w-1/2 sm:w-full" />
        </div>
        <Input placeholder="Subject" className="w-full" />
        <Input as="textarea" placeholder="Your Message" className="w-full h-36" />
        <div className="flex justify-center">
          <Button className="px-12" type="submit">
            Ask Questions
          </Button>
        </div>
      </form>
    </section>
  )
}

const FAQ = () => {
  return (
    <Layout title="FAQ">
      <BreadCrumb title="FAQ" img={bg} />
      <section className="bg-white p-xl">
        <div className="max-w-[768px] mx-auto px-5">
          <div className="text-center px-5">
            <Heading title="Pre-Service Questions" img={icon} />
            <h2 className="text-secondary py-3">Frequently Asked Questions</h2>
            <p className="text-gray">
              Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
              pretium id urna sit amet tincidunt.
            </p>
          </div>

          <Accordions className="py-10">
            <AccordionItem className="bg-white mb-2 shadow-none p-0 border-[1px] border-gray border-opacity-30">
              <AccordionTitle className="px-3 py-2" arrowKey={<RxCaretRight />} arrowKeyClassName="text-3xl">
                How can we help you?
              </AccordionTitle>
              <AccordionContent className="text-sm text-gray">
                <p className="p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="bg-white mb-2 shadow-none p-0 border-[1px] border-gray border-opacity-30">
              <AccordionTitle className="px-3 py-2" arrowKey={<RxCaretRight />} arrowKeyClassName="text-3xl">
                How can we help you?
              </AccordionTitle>
              <AccordionContent className="text-sm text-gray">
                <p className="p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="bg-white mb-2 shadow-none p-0 border-[1px] border-gray border-opacity-30">
              <AccordionTitle className="px-3 py-2" arrowKey={<RxCaretRight />} arrowKeyClassName="text-3xl">
                How can we help you?
              </AccordionTitle>
              <AccordionContent className="text-sm text-gray">
                <p className="p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="bg-white mb-2 shadow-none p-0 border-[1px] border-gray border-opacity-30">
              <AccordionTitle className="px-3 py-2" arrowKey={<RxCaretRight />} arrowKeyClassName="text-3xl">
                How can we help you?
              </AccordionTitle>
              <AccordionContent className="text-sm text-gray">
                <p className="p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordions>
        </div>
      </section>

      <ContactForm />
    </Layout>
  )
}

export default FAQ
