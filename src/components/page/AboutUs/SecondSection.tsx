import React from 'react'
import icon from '@assets/images/homepage/icon.png'
import tick from '@assets/images/homepage/tick.png'
import Heading from '../../ui/Heading'

const Timeline = ({ year, desc }: { year: string; desc: string }) => {
  return (
    <div className="flex gap-12 items-center">
      <div className="w-[10px] h-[10px] min-w-[10px] rounded-full bg-secondary outline-2 outline-secondary outline outline-offset-2 shadow-lg" />
      <div className="bg-white p-5 relative">
        <p className="absolute bg-secondary text-primary px-8 py-1 -top-5 left-3">{year}</p>
        <p>{desc}</p>
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 shadow-md -z-[1]" />
      </div>
    </div>
  )
}

const SecondSection = () => {
  return (
    <div className="p-xl bg-bg">
      <div className="container flex sm:flex-col items-stretch justify-between gap-10">
        <div className="basis-1/2 sm:basis-full">
          <Heading title="Welcome to BlueCollar" img={icon} bg="bg-white" />
          <h2>Let's BUild Something Creative Together</h2>
          <p className="text-gray">
            Phosfluorescently engaged worldwides methodologies with web enabled technology pursure interactively
            coordinates proactive commerce via process
          </p>

          <div className="flex flex-col gap-6 py-6">
            <div className="flex items-start justify-start sm:mb-5">
              <img src={tick} alt="tick" className="w-8 h-auto mt-1" />
              <div className="pl-4">
                <h6 className="text-secondary">35 Years Experience</h6>
                <p className="text-gray">
                  Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium
                </p>
              </div>
            </div>

            <div className="flex items-start justify-start sm:mb-5">
              <img src={tick} alt="tick" className="w-8 h-auto mt-1" />
              <div className="pl-4">
                <h6 className="text-secondary">Experience Certificate</h6>
                <p className="text-gray">
                  Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/2 sm:basis-full relative z-[2] pt-5">
          <div className="absolute w-[1px] h-full border-[1px] border-dashed border-primary top-0 left-[4px] -z-10" />
          <div className="flex flex-col justify-evenly gap-12 h-full z-[2]">
            <Timeline
              year="2022"
              desc="Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium"
            />
            <Timeline
              year="2020"
              desc="Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium"
            />
            <Timeline
              year="2015"
              desc="Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
