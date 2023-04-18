import classNames from 'classnames'
import blueTick from '@assets/images/pricing/blue-tick.png'
import crossTick from '@assets/images/pricing/cross-tick.png'
import servicePricing from '@data/servicePricing.json'
import Button from '@components/ui/Button'

const PriceCard = ({
  title,
  price,
  popular = false,
  bg = 'bg-bg'
}: {
  title: string
  price: number
  popular?: boolean
  bg?: string
}) => {
  return (
    <div className={classNames(bg, 'w-56 text-center pb-3')}>
      {popular ? (
        <div className="bg-primary text-sm text-center py-2">POPULAR</div>
      ) : (
        <div className="py-2 opacity-0 text">POPULAR</div>
      )}
      <p className="pt-3 font-bold text-base text-secondary">{title}</p>
      <h6 className="pt-1">$ {price.toFixed(2)}</h6>
      <p className="text-secondary text-sm">Per Visit Charge</p>
    </div>
  )
}

const Price = ({
  title,
  basic,
  standard,
  professional
}: {
  title: string
  basic: boolean
  standard: boolean
  professional: boolean
}) => {
  return (
    <>
      <div className="flex">
        <div className="bg-bg flex-grow pl-10 pt-1 pb-4">
          <p className="text-gray text-base">{title}</p>
        </div>
        <div className="w-56 bg-bg flex items-center justify-center">
          <img className="mx-auto" src={basic ? blueTick : crossTick} alt="tick" />
        </div>
        <div className="w-56 bg-white flex items-center justify-center">
          <img className="mx-auto" src={standard ? blueTick : crossTick} alt="tick" />
        </div>
        <div className="w-56 bg-bg flex items-center justify-center">
          <img className="mx-auto" src={professional ? blueTick : crossTick} alt="tick" />
        </div>
      </div>
      <div className="flex h-[1px]">
        <div className="w-10 bg-bg" />
        <div className="flex-grow bg-gray bg-opacity-30"></div>
      </div>
    </>
  )
}

const ServicePricing = () => {
  return (
    <section className="w-full pt-sm">
      <div className="flex">
        <div className="bg-bg flex-grow flex items-center pl-10">
          <h4 className="text-secondary">Services</h4>
        </div>
        <PriceCard title="Basic Plan" price={599} />
        <PriceCard title="Standard" price={699} popular bg="bg-white" />
        <PriceCard title="Professional" price={799} />
      </div>
      <div className="flex h-[1px]">
        <div className="w-10 bg-bg" />
        <div className="flex-grow bg-gray bg-opacity-30"></div>
      </div>
      {servicePricing.map(({ id, service, basic, standard, professional }) => (
        <Price key={id} title={service} basic={basic} standard={standard} professional={professional} />
      ))}
      <div className="flex">
        <div className="bg-bg flex-grow pl-10 py-16"></div>
        <div className="w-56 bg-bg flex items-center justify-center">
          <Button className="!py-2 px-10">Buy Now</Button>
        </div>
        <div className="w-56 bg-white flex items-center justify-center">
          <Button className="!py-2 px-10">Buy Now</Button>
        </div>
        <div className="w-56 bg-bg flex items-center justify-center">
          <Button className="!py-2 px-10">Buy Now</Button>
        </div>
      </div>
    </section>
  )
}

export default ServicePricing
