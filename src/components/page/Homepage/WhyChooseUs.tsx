import whyChooseUsImg from '@assets/images/homepage/why-choose-us.png'
import whyChooseUsIcon from '@assets/images/homepage/why-choose-us-icon.png'
import tick from '@assets/images/homepage/tick.png'
import Heading from '../../ui/Heading'

const TickSection = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-start items-start pb-4">
      <img src={tick} alt="tick" className="w-8 h-auto mt-1" />
      <div className="flex flex-col ml-3">
        <h6 className="text-secondary">{title}</h6>
        <p className="text-gray">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium
        </p>
      </div>
    </div>
  )
}

const StatisticsCard = ({ qty, title }: { qty: string | number; title: string }) => {
  return (
    <div className="flex mb-6 xsm:mb-4 xxsm:mb-3 last:mb-0 border-2 border-white sm:text-base">
      <div className="bg-primary">
        <p className="py-4 px-6 sm:py-2 sm:px-4 xxsm:px-1 xxsm:py-1 font-bold min-w-[90px] sm:min-w-[70px] text-center">
          {qty}
        </p>
      </div>
      <p className="py-4 px-6 sm:py-2 sm:px-4 xxsm:px-1 xxsm:py-1 text-white min-w-[250px] sm:min-w-[180px]">{title}</p>
    </div>
  )
}

const WhyChooseUs = () => {
  return (
    <div className="flex bg-white lg:flex-col">
      <div className="w-[45%] relative lg:w-full">
        <img src={whyChooseUsImg} alt="Statistics" className="h-full w-auto object-cover" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  px-24 xl:px-12 lg:px-10 sm:px-5 py-40 xl:py-20 lg:py-16 sm:py-8 xxsm:p-3 bg-secondary bg-opacity-70 backdrop-blur-md">
          <StatisticsCard qty={3956} title="Projects Done" />
          <StatisticsCard qty={851} title="People Working" />
          <StatisticsCard qty={265} title="Business Partners" />
          <StatisticsCard qty="854+" title="Happy Customers" />
        </div>
      </div>
      <div className="w-[55%] lg:w-full">
        <div className="w-[645px] xl:w-full pl-20 xl:px-8 lg:px-6 sm:px-3 py-36 xl:py-10 lg:py-8 sm:py-5">
          <Heading img={whyChooseUsIcon} title="Why Choose Us" />
          <h2 className="text-secondary">Few Reasons Why You Should Choose Us</h2>
          <p className="text-gray py-3">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
            pretium id urna sit amet tincidunt. Interdum et malesuada.{' '}
          </p>
          <TickSection title="35 Years Experience" />
          <TickSection title="Excellencee Certificate" />
          <TickSection title="Affordable Price" />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
