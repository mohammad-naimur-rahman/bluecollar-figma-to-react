import React from 'react'
import Heading from '../../ui/Heading'
import Button from '../../ui/Button'
import icon from '@assets/images/homepage/why-choose-us-icon.png'
import yellowTick from '@assets/images/homepage/yellow-tick.png'
import tick from '@assets/images/homepage/tick.png'
import classNames from 'classnames'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: '599.00',
    popular: false,
    items: [
      'Electrical Service',
      'Distribution Power Systemss',
      'Hight & Medium Voltages',
      'Industrial Control Systems',
      'Switch Installation',
      'Generator Installation',
      'Innovative Construction'
    ]
  },
  {
    id: 2,
    name: 'Standard',
    price: '699.00',
    popular: true,
    items: [
      'PLC Controls',
      'Conveyor Systems',
      'Wiring Renovations',
      'Electric Water Heater Repair',
      'Service And Panel Upgrades',
      'Efficient Lighting Solutions',
      'Site Lighting'
    ]
  },
  {
    id: 3,
    name: 'Professional',
    price: '799.00',
    popular: false,
    items: [
      'Cable Tray Installation',
      'Wiring Upgrades',
      'Enery Efficient Lighting',
      'Emenrgency Generating',
      'Pools and Hot Tubs',
      'Air Conditioning Units',
      'Generating Systems'
    ]
  }
]

const PriceAndPlan = ({ headerTitle }: { headerTitle: string }) => {
  return (
    <div className="container py-40 xl:py-36 lg:py-32 md:py-28 sm:py-24">
      <div className="flex md:flex-col items-center justify-between">
        <div className="w-1/2 md:w-full">
          <Heading img={icon} title={headerTitle} bg="bg-white" />
          <h2 className="text-secondary py-3 xl:text-[30px]">Let’s Customize Work With Affordable Price</h2>
        </div>
        <p className="text-gray w-1/2 md:w-full md:pb-5">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
          pretium id urna sit amet tincidunt. Interdum et malesuada.
        </p>
      </div>

      <div className="flex gap-6 xl:gap-0 lg:gap-6 sm:gap-0 justify-between lg:justify-center flex-wrap">
        {plans.map(({ id, name, price, popular, items }) => (
          <AnimationOnScroll
            animateIn="animate__zoomInUp"
            delay={(id - 1) * 100}
            key={id}
            className="w-[30%] lg:w-[calc(50%_-_12px)] sm:w-full sm:mb-5 shadow-md"
          >
            <div className="p-8 xl:p-5 bg-white h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col text-secondary">
                    <h6>{name}</h6>
                    <h4>${price}</h4>
                  </div>
                  <div
                    className={classNames({
                      'flex flex-col justify-center items-center': popular
                    })}
                  >
                    {popular ? <span className="bg-primary text-secondary px-3 py-1 mb-2">POPULAR</span> : null}
                    <p className="text-gray text-base">Per Visit Charge</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray bg-opacity-30 my-5"></div>

                {items.map(el => (
                  <div key={el} className="flex items-center justify-start py-3">
                    <img src={yellowTick} alt="Tick" className="w-5 h-auto mr-3" />
                    <p className="text-gray">{el}</p>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-8 self-end" variant={popular ? 'white' : 'primary'}>
                Buy Now
              </Button>
            </div>
          </AnimationOnScroll>
        ))}
      </div>

      <div className="flex sm:flex-col gap-12 sm:gap-0 pt-20 justify-between items-center">
        <div className="flex items-start justify-start sm:mb-5">
          <img src={tick} alt="tick" className="w-8 h-auto mt-1" />
          <div className="pl-4">
            <h6 className="text-secondary">Affordable Price</h6>
            <p className="text-gray">
              lacinia, tempor lacus at, eleifend diam. Maecenas tempus tincidunt placeratneque, maximus mattis
            </p>
          </div>
        </div>

        <div className="flex items-start justify-start">
          <img src={tick} alt="tick" className="w-8 h-auto mt-1" />
          <div className="pl-4">
            <h6 className="text-secondary">Fixed Plan</h6>
            <p className="text-gray">
              lacinia, tempor lacus at, eleifend diam. Maecenas tempus tincidunt placeratneque, maximus mattis
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceAndPlan
