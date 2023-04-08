import React, { ReactNode, useRef } from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaPinterest, FaTwitter } from 'react-icons/fa'
import Logo from '@assets/Logo.png'
import navData from '@data/ui/nav.json'
import NavLinkStyled from './NavLinkStyled'
import Button from './Button'
import { RxCaretDown, RxCaretRight, RxHamburgerMenu } from 'react-icons/rx'

const HeaderInforCard = ({ logo, title, description }: { logo: ReactNode; title: string; description: string }) => {
  return (
    <div className="flex items-center ml-6 lg:ml-4">
      <div className="bg-primary xsm:bg-opacity-0 w-14 lg:w-12 h-14 lg:h-12 xsm:w-5 xsm:h-5 rounded-full flex items-center justify-center">
        <div className="text-lg md:text-base">{logo}</div>
      </div>
      <div className="ml-1.5">
        <h6 className="text-secondary md:text-lg xsm:hidden">{title}</h6>
        <p className="text-gray text-sm">{description}</p>
      </div>
    </div>
  )
}

const Header = () => {
  const navMenu = useRef<HTMLUListElement>(null)
  return (
    <header className="relative">
      <div className="py-5 lg:py-3 bg-bg-secondary">
        <div className="container flex items-center justify-between sm:text-sm xsm:text-xs">
          <p className="sm:text-sm">Opening Hours: 06:00 to 20:00</p>
          <ul className="flex">
            <li className="mx-1.5 sm:text-sm">
              <FaInstagram />
            </li>
            <li className="mx-1.5 sm:text-sm">
              <FaFacebook />
            </li>
            <li className="mx-1.5 sm:text-sm">
              <FaTwitter />
            </li>
            <li className="mx-1.5 sm:text-sm">
              <FaPinterest />
            </li>
          </ul>
        </div>
      </div>

      <section className="flex flex-col bg-white pt-7 lg:pt-4 pb-12 lg:pb-8">
        <div className="flex sm:flex-col items-center justify-between container">
          <img src={Logo} alt="BlueCollar" className="w-60 lg:w-52 md:w-40 h-auto sm:w-3/4 sm:h-auto xsm:w-1/2" />
          <div className="flex sm:mt-5 xxsm:flex-col xxsm:gap-3">
            <HeaderInforCard logo={<FaEnvelope />} title="Mail Us" description="info@example.com" />
            <HeaderInforCard logo={<FaPhone />} title="Call Us" description="+01 569 896 654" />
          </div>
        </div>
      </section>

      <nav className="flex items-center justify-between bg-primary container py-3 absolute -translate-x-1/2 left-1/2 -bottom-14 shadow-lg">
        <div className="hidden md:block text-3xl cursor-pointer">
          <RxHamburgerMenu
            onClick={() => {
              navMenu.current?.classList?.toggle('opacity-100')
              navMenu.current?.classList?.toggle('md:opacity-0')
              navMenu.current?.classList?.toggle('visible')
              navMenu.current?.classList?.toggle('md:invisible')
            }}
          />
        </div>
        <ul
          ref={navMenu}
          className="flex items-center md:items-start md:flex-col md:absolute bg-primary top-full left-0 opacity-100 visible md:opacity-0 md:invisible transition-all"
        >
          {navData?.map(({ id, name, link, hasChildren, children }) => (
            <li key={id} className="md:my-2.5">
              {hasChildren ? (
                <div className="relative group md:w-full">
                  <div className="mx-6 lg:mx-2 cursor-pointer flex items-center md:w-full">
                    <p className="mr-2">Pages</p>
                    <span className="text-xl mt-1">
                      <RxCaretDown className="block md:hidden" />
                      <RxCaretRight className="hidden md:block" />
                    </span>
                  </div>
                  <ul className="absolute bg-primary top-[calc(100%_+_20px)] md:top-0 left-1/2 -translate-x-1/2 md:left-[105%] md:translate-x-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all">
                    {children?.map(({ id, name, link }) => (
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
