import React from 'react'
import image from '@assets/images/homepage/we-provide-your-future.jpg'
import icon from '@assets/images/homepage/icon.png'

const SecondSection = () => {
  return (
    <div className="bg-white py-32">
      <div className="container flex items-center">
        <img src={image} alt="we-provide-your-future" />
        <div className="p-10 h-full">
          <div className="inline-flex justify-center items-center bg-bg px-4 py-2">
            <img src={icon} alt="Blue Collar" className="w-4 h-auto inline-block" />
            <p className="pl-2 text-secondary">Welcome BlueCollar</p>
          </div>
          <h2 className="text-secondary">We Provide Your Future</h2>
          <p className="text-gray py-3">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
            pretium id urna sit amet tincidunt. Interdum et malesuada.
          </p>
          <p className="text-gray py-3">
            In pulvinar viverra diam, nec rutrum mauris maximus non. Aenean sed quam tristique, facilisis est ac,
            interdum velit.
          </p>

          <div className="flex items-center">
            <div className="flex flex-col bg-bg w-36 items-center justify-center">
              <h1 className="text-primary">35</h1>
              <h6 className="text-center">Years Of Experience</h6>
            </div>
            <ul className="pl-5 text-gray">
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
