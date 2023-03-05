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
    <div className="flex items-center ml-6">
      <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center">
        <div className="text-lg">{logo}</div>
      </div>
      <div className="ml-1.5">
        <h6 className="text-white">{title}</h6>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary py-28">
        <div className="container flex items-center justify-between gap-20">
          <div className="text-secondary">
            <h2>Subscribe Our Newsletter</h2>
            <p>
              <b>stay in touch with us to get latest news.</b>
              maximus mattis est facilisi. In sed pretium Proin pretium id urna sit amet tincidunt.
            </p>
          </div>

          <div className="flex border-2 border-white">
            <input
              type="email"
              className="bg-primary placeholder:text-secondary placeholder:text-sm p-3 focus:outline-none text-secondary"
              placeholder="Your mail address here"
            />
            <button className="bg-white text-secondary px-8 font-bold">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="container py-12">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Blue Collar" />
            <div className="flex">
              {footerInfos.map(({ id, logo, title, description }) => (
                <InforCard key={id} logo={logo} title={title} description={description} />
              ))}
            </div>
          </div>
        </div>

        <div className="container h-[1px] bg-white bg-opacity-30 my-6" />

        <div className="container flex text-white">
          <div className="w-[40%]">
            <p className="font-thin">
              Denouncing pleasure and praising pain was born and I will givg you a coghmplete acchount of the system,
              and expound the actual
            </p>
            <div className="flex py-10">
              {socialIcons.map(({ id, icon }) => (
                <div
                  key={id}
                  className="bg-white bg-opacity-30 rounded-full w-12 h-12 mr-4 cursor-pointer flex justify-center items-center"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div className="h-90 w-[1px] bg-white bg-opacity-30 ml-5" />

          <div className="w-[40%]">
            <div className="flex justify-around">
              <ul>
                <li className="font-normal pb-2">Explore</li>
                <li className="font-thin text-base cursor-pointer pb-2">About Us</li>
                <li className="font-thin text-base cursor-pointer pb-2">Gallery</li>
                <li className="font-thin text-base cursor-pointer pb-2">Offers</li>
                <li className="font-thin text-base cursor-pointer pb-2">Pricing</li>
                <li className="font-thin text-base cursor-pointer pb-2">FAQ</li>
              </ul>
              <ul>
                <li className="font-normal pb-2">Quick Links</li>
                <li className="font-thin text-base cursor-pointer pb-2">Services</li>
                <li className="font-thin text-base cursor-pointer pb-2">Blog</li>
                <li className="font-thin text-base cursor-pointer pb-2">Contact Us</li>
                <li className="font-thin text-base cursor-pointer pb-2">Service Request</li>
                <li className="font-thin text-base cursor-pointer pb-2">Estimation Calculator</li>
              </ul>
            </div>
          </div>

          <div className="h-90 w-[1px] bg-white bg-opacity-30 mr-10" />

          <div className="w-[20%]">
            <ul>
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
