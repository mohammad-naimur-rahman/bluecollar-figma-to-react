import hero from '@assets/images/blog/hero.png'
import { BsClockFill, BsPersonFill } from 'react-icons/bs'

const BlogPost = () => {
  return (
    <section className="bg-white p-xxl">
      <div className="container">
        <div className="relative">
          <img src={hero} alt="Perfect Work Time For Workers" />
          <div className="absolute -bottom-6 sm:-bottom-20 left-1/2 -translate-x-1/2 text-secondary flex sm:flex-col">
            <div className="bg-primary-light flex items-center justify-center py-3 px-4 md:py-1 md:px-2 sm:py-3 sm:px-4 xsm:px-2 xsm:py-1">
              <BsPersonFill />
              <p className="w-[max-content] ml-2">John Kehnis</p>
            </div>
            <div className="bg-primary flex items-center justify-center py-3 px-4 md:py-1 md:px-2 sm:py-3 sm:px-4 xsm:px-2 xsm:py-1">
              <BsClockFill />
              <p className="w-[max-content] ml-2">April 2, 2022</p>
            </div>
            <div className="bg-primary-light flex items-center justify-center py-3 px-4 md:py-1 md:px-2 sm:py-3 sm:px-4 xsm:px-2 xsm:py-1">
              <BsClockFill />
              <p className="w-[max-content] ml-2">04:30 PM</p>
            </div>
          </div>
        </div>
        <div className="max-w-[800px] px-5 md:px-2 [&>p]:text-gray mx-auto mt-12 sm:mt-28">
          <p>
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium dynamically
            target high-payoff intellectual capital for customized technologies objectively integrate emerging core
            competencies before process-centric communities dramatically evisculate holistic innovation rather than
            client-centric data.
          </p>

          <h2 className="text-secondary py-5">Perfect Work Time For Workers</h2>

          <p>
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium dynamically
            target high-payoff intellectual capital for customized technologies objectively integrate emerging core
            competencies before process-centric communities dramatically evisculate holistic innovation rather than
            client-centric data.
          </p>

          <ul className="text-gray [&>li]:py-3 py-3">
            <li>1. Listen to what they say about you</li>
            <li>2. Randomised words which.</li>
            <li>3. Internet tend to repeat predefined chunks</li>
          </ul>

          <div className="flex sm:flex-col my-5">
            <div className="min-w-[43px] sm:w-full sm:h-8 bg-secondary"></div>
            <div>
              <p className="text-secondary bg-primary px-8 py-7 italic leading-loose">
                “The job market of the future will consist of those jobs that robots cannot perform. Our blue-collar
                work is pattern recognition, making sense of what you see. Gardeners will still have jobs because every
                garden is different.”
              </p>
            </div>
          </div>

          <h4 className="text-secondary">Make real time a day services</h4>

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
        </div>
      </div>
    </section>
  )
}

export default BlogPost
