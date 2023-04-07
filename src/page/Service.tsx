import Layout from '@components/ui/Layout.jsx'
import BreadCrumb from '@components/ui/BreadCrumb.jsx'
import bg from '@assets/images/service/bg.png'
import firstBg from '@assets/images/service/first-bg.png'
import tick from '@assets/images/homepage/tick.png'
import first from '@assets/images/service/first.png'
import vector1 from '@assets/images/service/vector1.png'
import vector2 from '@assets/images/service/vector2.png'
import vector3 from '@assets/images/service/vector3.png'
import vector4 from '@assets/images/service/vector4.png'
import next from '@assets/images/service/next.png'
import expert1 from '@assets/images/service/expert1.png'
import expert2 from '@assets/images/service/expert2.png'
import expert3 from '@assets/images/service/expert3.png'

const ticks = [
  'Telecom Installation and Repair',
  'Hosted PBX Solutions',
  'Outdoor/Parking Lot Lighting',
  'Outlets, Circuits and Rewiring',
  'HID Lighting and Control',
  'Lighting Design',
  'Motors and Transformers',
  'Isolated Computer Circuits',
  'Data/Communications Cabling',
  'Ballast/Lamp Replacing '
]

const secondTicks = [
  'experience investor Technician',
  'Your Electrical and Security System',
  'Sources whereas high standards',
  'Credibly innovate granular internal',
  'services for domestic and commercial'
]

const Tick = ({ title, bottomMargin = true }: { title: string; bottomMargin: boolean }) => {
  return (
    <div className="flex flex-col">
      <div className="flex pb-5">
        <img src={tick} alt="tick" className="w-6 h-6 aspect-square object-cover" />
        <p className="text-gray pl-4">{title}</p>
      </div>
      {bottomMargin && <div className="w-full h-[1px] bg-gray bg-opacity-30 mb-5" />}
    </div>
  )
}

const Tiles = ({ img, title, desc }: { img: string; title: string; desc: string }) => {
  return (
    <div className="flex items-start w-[calc(50%_-_40px)]">
      <img src={img} alt={title} className="w-8 h-8 aspect-square object-cover" />
      <div className="pl-5">
        <h6 className="text-secondary pb-1">{title}</h6>
        <p className="text-gray text-sm">{desc}</p>
      </div>
    </div>
  )
}

const TeamMember = ({ img, name, title }: { img: string; name: string; title: string }) => {
  return (
    <div className="w-1/3 border-[1px] border-gray border-opacity-30 p-3 text-center">
      <img src={img} alt={name} className="w-full h-auto" />
      <h6 className="text-secondary pt-4">{name}</h6>
      <p className="text-gray pb-1 pt-1">{title}</p>
    </div>
  )
}

const Service = () => {
  return (
    <Layout title="Services">
      <BreadCrumb title="Service Single" img={bg} />
      <div className="bg-white">
        <div className="container flex gap-10 p-xxl">
          {/**Left side */}
          <div className="w-1/3">
            <div className="px-5 py-8 text-center flex flex-col w-full items-center justify-center text-white font-bold relative overflow-hidden z-10">
              <div className="absolute inset-0 w-full h-full -z-10 blur-[3px]">
                <img src={firstBg} alt="how we work" className="absolute inset-0 w-full h-full object-cover" />
                <div className="bg-secondary bg-opacity-80 absolute inset-0 w-full h-full"></div>
              </div>
              <p>Providing Varity</p>
              <p>Electrical Services</p>
              <div className="bg-primary text-secondary my-4 py-2 px-5">
                <p className="font-normal">Discount 25%</p>
                <p>Rewiring Services</p>
              </div>
              <p>Click to Get Discount</p>
            </div>

            <h5 className="py-5">Our Services</h5>
            {ticks.map(tick => (
              <Tick key={tick} title={tick} bottomMargin={true} />
            ))}
          </div>

          {/**Right side */}
          <div className="w-2/3">
            <img src={first} alt="Description for Commercial Services" className="w-full h-auto" />
            <h3 className="pt-5 pb-1">Description for Commercial Services</h3>
            <p className="text-gray">
              Phosfluorescently engage worldwide methodologies with web enabled technology Interactively coordinate
              proactives e-commerce process centric outside the box thinking completely pursue scalabl customer service
              through sustainable potentialities colaboratively administrate turnkey channels whereas virtual e tailers
              objectively seize scalable metrics whereas proactiveservices Seamlessly empower fully researched growth
              strategies.
            </p>

            <div className="flex py-10">
              <div className="min-w-[60px] bg-secondary"></div>
              <div className="bg-primary">
                <p className="text-xl text-secondary px-14 py-12 font-bold italic">
                  The job market of the future will consist of those jobs that robots cannot perform. Our blue-collar
                  work is pattern recognition, making sense of what you see.
                </p>
              </div>
            </div>

            <p className="text-gray">
              Coordinate proactives e-commerce process centric outside the box thinking completely pursue scalabl
              customer service through sustainable potentialities colaboratively administrate turnkey channels whereas
              virtual e tailers objectively seize scalable.
            </p>

            <div className="bg-bg px-12 py-12 flex flex-wrap gap-x-20 gap-y-12 my-12">
              <Tiles
                img={vector1}
                title="24/7 Availability"
                desc="Globally incubate standards before scalable benefits."
              />
              <Tiles
                img={vector2}
                title="Affordable Price"
                desc="Globally incubate standards before scalable benefits."
              />
              <Tiles
                img={vector3}
                title="Process Technology"
                desc="Globally incubate standards before scalable benefits."
              />
              <Tiles
                img={vector4}
                title="Free Estimation"
                desc="Globally incubate standards before scalable benefits."
              />
            </div>

            <h3 className="text-secondary pb-1">Key benefits with our service</h3>
            <p className="text-gray">
              Scalabl customer service through sustainable potentialities colaboratively administrate turnkey channels
              whereas virtual e tailers objectively seize scalable metrics whereas proactiveservices Seamlessly empower
              fully researched growth strategies.
            </p>

            <div className="flex items-center py-8 gap-6">
              <div className="w-1/2">
                {secondTicks.map(tick => (
                  <Tick key={tick} title={tick} bottomMargin={false} />
                ))}
              </div>
              <div className="w-1/2">
                <img src={next} alt="Key benefits With Our Service" className="w-full h-auto" />
              </div>
            </div>

            <h3 className="text-secondary pt-5">Our Expert Team</h3>
            <div className="flex gap-3">
              <TeamMember img={expert1} name="Gavin Avery" title="Engineer" />
              <TeamMember img={expert2} name="Nathan Tucker" title="Engineer" />
              <TeamMember img={expert3} name="Sarrah Albert" title="Engineer" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Service
