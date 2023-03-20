import React from 'react'
import logo from '@assets/logo-2.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaMarker, FaPhone, FaPinterest, FaTwitter } from 'react-icons/fa'

const footerInfos = [
  {
    id: 1,
    logo: <FaEnvelope />,
    title: 'Mail Us',
    description: 'info@example.com'
  },
  {
    id: 2,
    logo: <FaPhone />,
    title: 'Call Us',
    description: '+01 569 896 654'
  },
  {
    id: 3,
    logo: <FaMarker />,
    title: 'Location',
    description: 'Amsterdam, 109-74'
  }
]

const socialIcons = [
  {
    id: 1,
    icon: <FaInstagram />
  },
  {
    id: 2,
    icon: <FaFacebook />
  },
  {
    id: 3,
    icon: <FaTwitter />
  },
  {
    id: 4,
    icon: <FaPinterest />
  }
]

const InforCard = ({ logo, title, description }) => {
  return (
    <div className="flex items-center ml-6 lg:ml-0 sm:mb-5">
      <div className="bg-primary w-14 h-14 lg:w-12 lg:h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center">
        <div className="text-lg">{logo}</div>
      </div>
      <div className="ml-1.5 sm:ml-3">
        <h6 className="text-white md:text-base sm:text-xl">{title}</h6>
        <p className="text-white text-sm md:text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary py-28 xl:py-24 lg:py-20 md:py-16 sm:py-12">
        <div className="container flex lg:flex-col items-center justify-between gap-20 lg:gap-10">
          <div className="text-secondary lg:w-full">
            <h2>Subscribe Our Newsletter</h2>
            <p>
              <b>stay in touch with us to get latest news.</b>
              maximus mattis est facilisi. In sed pretium Proin pretium id urna sit amet tincidunt.
            </p>
          </div>

          <div className="flex border-2 border-white">
            <input
              type="email"
              className="bg-primary placeholder:text-secondary placeholder:text-sm p-3 xsm:p-2 xsm:w-36 focus:outline-none text-secondary"
              placeholder="Your mail address here"
            />
            <button className="bg-white text-secondary px-8 xsm:px-4 font-bold">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="container py-12 lg:py-6">
          <div className="flex items-center justify-between lg:flex-col">
            <img src={logo} alt="Blue Collar" />
            <div className="flex sm:flex-col lg:pt-8 lg:justify-between lg:w-full">
              {footerInfos.map(({ id, logo, title, description }) => (
                <InforCard key={id} logo={logo} title={title} description={description} />
              ))}
            </div>
          </div>
        </div>

        <div className="container h-[1px] bg-white bg-opacity-30 my-6" />

        <div className="container flex md:flex-col text-white">
          <div className="w-[40%] md:w-full">
            <p className="font-thin">
              Denouncing pleasure and praising pain was born and I will givg you a coghmplete acchount of the system,
              and expound the actual
            </p>
            <div className="flex py-10 md:justify-center md:w-full">
              {socialIcons.map(({ id, icon }) => (
                <div
                  key={id}
                  className="bg-white bg-opacity-30 rounded-full w-12 h-12 mr-4 md:mr-0 md:mx-5 cursor-pointer flex justify-center items-center"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div className="h-90 w-[1px] bg-white bg-opacity-30 ml-5" />

          <div className="w-[40%] md:w-full">
            <div className="flex md:flex-col justify-around md:ml-20 sm:ml-10 xsm:ml-0">
              <ul>
                <li className="font-normal pb-2">Explore</li>
                <li className="font-thin text-base cursor-pointer pb-2">About Us</li>
                <li className="font-thin text-base cursor-pointer pb-2">Gallery</li>
                <li className="font-thin text-base cursor-pointer pb-2">Offers</li>
                <li className="font-thin text-base cursor-pointer pb-2">Pricing</li>
                <li className="font-thin text-base cursor-pointer pb-2">FAQ</li>
              </ul>

              <div className="hidden md:block w-full h-[1px] bg-white bg-opacity-30 my-7" />

              <ul>
                <li className="font-normal pb-2">Quick Links</li>
                <li className="font-thin text-base cursor-pointer pb-2">Services</li>
                <li className="font-thin text-base cursor-pointer pb-2">Blog</li>
                <li className="font-thin text-base cursor-pointer pb-2">Contact Us</li>
                <li className="font-thin text-base cursor-pointer pb-2">Service Request</li>
                <li className="font-thin text-base cursor-pointer pb-2">Estimation Calculator</li>
              </ul>

              <div className="hidden md:block w-full h-[1px] bg-white bg-opacity-30 my-7" />
            </div>
          </div>

          <div className="h-90 w-[1px] bg-white bg-opacity-30 mr-10" />

          <div className="w-[20%]  md:ml-20 sm:ml-10 xsm:ml-0">
            <ul className="md:mx-auto">
              <li className="font-normal pb-2">Utility Pages</li>
              <li className="font-thin text-base cursor-pointer pb-2">Style Guide</li>
              <li className="font-thin text-base cursor-pointer pb-2">Changelog</li>
              <li className="font-thin text-base cursor-pointer pb-2">Licenses</li>
              <li className="font-thin text-base cursor-pointer pb-2">Protected Page</li>
              <li className="font-thin text-base cursor-pointer pb-2">404 Page</li>
            </ul>
          </div>
        </div>

        <div className="container h-[1px] bg-white bg-opacity-30 my-6" />

        <p className="text-white text-center pb-10 font-thin text-base">
          Copyright © BlueCollar | Designed by VictorFlow Templates - Powered by Webflow |{' '}
          <a href="https://github.com/mohammad-naimur-rahman" target="_blank" rel="noreferrer" className="italic">
            Coded by Naimur
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
