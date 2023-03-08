import React from 'react'
import image from '@assets/images/homepage/we-provide-your-future.jpg'
import icon from '@assets/images/homepage/icon.png'
import Heading from '../../ui/Heading'

const SecondSection = () => {
  return (
    <div className="bg-white py-32 xl:py-28 lg:py-24 md:py-20 sm:py-16">
      <div className="container flex lg:flex-col items-stretch justify-between">
        <div className="w-1/2 xl:w-[45%] lg:w-full lg:order-2">
          <img src={image} alt="we-provide-your-future" className="w-full h-full object-cover" />
        </div>
        <div className="p-10 lg:p-6 xsm:p-2 h-full w-1/2 xl:w-[55%] lg:w-full lg:order-1">
          <Heading img={icon} title="Welcome BlueCollar" />
          <h2 className="text-secondary">We Provide Your Future</h2>
          <p className="text-gray py-3">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
            pretium id urna sit amet tincidunt. Interdum et malesuada.
          </p>
          <p className="text-gray py-3">
            In pulvinar viverra diam, nec rutrum mauris maximus non. Aenean sed quam tristique, facilisis est ac,
            interdum velit.
          </p>

          <div className="flex items-center xsm:flex-col">
            <div className="flex flex-col xsm:flex-row bg-bg w-36 xsm:w-full items-center justify-center">
              <h1 className="text-primary xsm:mr-3">35</h1>
              <h6 className="text-center">Years Of Experience</h6>
            </div>
            <ul className="pl-5 xsm:pl-0 xsm:pt-2 text-gray">
              <li>- Sed varius ipsum lacus</li>
              <li>- Pulvinar tortor dignissim sit amet.</li>
              <li>- Quisque tristique diam quis placerat</li>
              <li>- Aliquam id ante suscipi fringilla.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
