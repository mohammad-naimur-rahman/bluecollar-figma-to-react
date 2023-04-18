import BreadCrumb from '@components/ui/BreadCrumb'
import Layout from '@components/ui/Layout'
import bg from '@assets/images/team-single/bg.png'
import hero from '@assets/images/team-single/hero.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Button from '@components/ui/Button'

const Contact = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="py-2 flex items-center">
      <p className="text-secondary font-bold w-20">{title}:</p>
      <p className="text-gray text-base">{desc}</p>
    </div>
  )
}

const TeamSingle = () => {
  return (
    <Layout title="Team Single">
      <BreadCrumb img={bg} title="David James" />
      <section className="bg-white">
        <div className="container p-xl">
          <div className="flex md:flex-col gap-14">
            <img src={hero} alt="David James" className="w-2/5 h-auto object-cover md:w-full" />
            <div className="w-3/5 md:w-full">
              <h5 className="text-secondary">Devid is a professional Engineer for BlueCollar since 2010</h5>
              <p className="text-gray py-5">
                Hello! to the table win survival strategy ensure to proactive domination At the end of the day, going
                forward new normal that has evolved from user generated content will have touch points shoring hanging
                fruits to identify a ballpark value-added activity to beta.
              </p>

              <div className="w-full h-[1px] bg-gray bg-opacity-30 mb-5" />

              <Contact title="Phone" desc="(+01) 123 456 789" />
              <Contact title="Email" desc="davidgames@bluecollar.com" />
              <Contact title="Website" desc="www.davidgames.com" />

              <div className="flex gap-5 py-5 text-secondary [&>*]:cursor-pointer">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>

              <Button>Contact Me</Button>
            </div>
          </div>

          <h2 className="text-secondary pt-8">Qualification & Experience</h2>
          <div className="[&>*]:text-gray">
            <p>
              Efficiently myocardinate market driven innovation open source alignments dramatically engaged high pay off
              infomediaries rather than client centric imperatives. Efficiently initiates world class applications after
              client centric infomediaries phosfluorescently expedite impactful supply chains via focused results
              holistically generated open source applications through bleeding edges sources compellingly supply just in
              time to catalysts for change through top-line potentialities.
            </p>

            <ul className="[&>li]:py-3 py-3">
              <li>1. Listen to what they say about you</li>
              <li>2. Randomised words which.</li>
              <li>3. Internet tend to repeat predefined chunks</li>
            </ul>

            <h5 className="!text-secondary pb-3 pt-1">Make real time a day services</h5>

            <p>
              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
              users after installed base benefits. Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </p>

            <ul className="text-gray [&>li]:py-3 py-3">
              <li> 1. Interactively procrastinate high-payoff content</li>
              <li> 2. Randomised words which don't look even slightly believable.</li>
              <li> 3. Your best work, together in one package that works seamlessly from your computer</li>
              <li> 4. Delivers the tools you need to save time Improve field performance always</li>
            </ul>

            <p>
              Podcasting operational change management inside of workflows to establish a framework. Taking seamless key
              performance indicators offline to maximize the long tail. Keeping your eye on the ball while performing a
              deep dive on the start-up mentality to derive convergence on cross-platform integration.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TeamSingle
