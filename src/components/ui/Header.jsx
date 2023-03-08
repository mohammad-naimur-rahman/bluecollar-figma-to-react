import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaPinterest, FaTwitter } from 'react-icons/fa'
import Logo from '@assets/Logo.png'
import navData from '@data/ui/nav.json'
import NavLinkStyled from './NavLinkStyled'
import Button from './Button'
import { RxCaretDown } from 'react-icons/rx'

const HeaderInforCard = ({ logo, title, description }) => {
  return (
    <div className="flex items-center ml-6 lg:ml-4">
      <div className="bg-primary w-14 lg:w-12 h-14 lg:h-12 rounded-full flex items-center justify-center">
        <div className="text-lg">{logo}</div>
      </div>
      <div className="ml-1.5">
        <h6 className="text-secondary">{title}</h6>
        <p className="text-gray text-sm">{description}</p>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <header className="relative">
      <div className="py-5 lg:py-3 bg-bg-secondary">
        <div className="container flex items-center justify-between">
          <p>Opening Hours: 06:00 to 20:00</p>
          <ul className="flex">
            <li className="mx-1.5">
              <FaInstagram />
            </li>
            <li className="mx-1.5">
              <FaFacebook />
            </li>
            <li className="mx-1.5">
              <FaTwitter />
            </li>
            <li className="mx-1.5">
              <FaPinterest />
            </li>
          </ul>
        </div>
      </div>

      <section className="flex flex-col bg-white pt-7 lg:pt-4 pb-12 lg:pb-8">
        <div className="flex items-center justify-between container">
          <img src={Logo} alt="BlueCollar" className="w-60 h-auto" />
          <div className="flex">
            <HeaderInforCard logo={<FaEnvelope />} title="Mail Us" description="info@example.com" />
            <HeaderInforCard logo={<FaPhone />} title="Call Us" description="+01 569 896 654" />
          </div>
        </div>
      </section>

      <nav className="flex items-center justify-between bg-primary container py-3 absolute -translate-x-1/2 left-1/2 -bottom-14">
        <ul className="flex items-center">
          {navData?.map(({ id, name, link, hasChildren, children }) => (
            <li key={id}>
              {hasChildren ? (
                <div className="relative group">
                  <div className="mx-6 lg:mx-2 cursor-pointer flex items-center">
                    <p className="mr-2">Pages</p>
                    <span className="text-xl mt-1">
                      <RxCaretDown />
                    </span>
                  </div>
                  <ul className="absolute bg-primary top-[calc(100%_+_20px)] left-1/2 -translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all">
                    {children.map(({ id, name, link }) => (
                      <li key={id} className="py-2">
                        <NavLinkStyled to={link} className="mx-6 w-[max-content] inline-block">
                          {name}
                        </NavLinkStyled>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLinkStyled to={link} className="mx-6 lg:mx-2">
                  {name}
                </NavLinkStyled>
              )}
            </li>
          ))}
        </ul>
        <Button variant="secondary" className="mr-3">
          Have Any Questions?
        </Button>
      </nav>
    </header>
  )
}

export default Header
