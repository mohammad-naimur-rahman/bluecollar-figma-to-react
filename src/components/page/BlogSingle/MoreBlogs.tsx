import Button from '@components/ui/Button'
import { blogs } from '../Homepage/BlogAndArticles'
import { BsChevronRight, BsClockFill, BsPersonFill } from 'react-icons/bs'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const MoreBlogs = () => {
  return (
    <section className="bg-white p-xl">
      <div className="container">
        <div className="flex justify-between items-center pb-5">
          <h2 className="text-secondary">Related Posts</h2>
          <Button>More Posts</Button>
        </div>

        <div className="flex md:flex-col gap-10 lg:gap-5 md:gap-3 sm:gap-5 items-stretch justify-center">
          {blogs.map(({ id, img, title, description, writer, date }) => (
            <AnimationOnScroll
              animateIn="animate__backInUp"
              delay={(id - 1) * 100}
              key={id}
              className="w-1/2 md:w-full"
            >
              <div className="flex flex-col justify-between items-start h-full">
                <div>
                  <div className="relative">
                    <img src={img} alt={title} className="w-full" />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-secondary flex">
                      <div className="bg-primary-light flex items-center justify-center py-3 px-4 md:py-1 md:px-2 sm:py-3 sm:px-4 xsm:px-2 xsm:py-1">
                        <BsPersonFill />
                        <p className="w-[max-content]">{writer}</p>
                      </div>
                      <div className="bg-primary flex items-center justify-center py-3 px-4 md:py-1 md:px-2 sm:py-3 sm:px-4 xsm:px-2 xsm:py-1">
                        <BsClockFill />
                        <p className="w-[max-content]">{date}</p>
                      </div>
                    </div>
                  </div>
                  <h5 className="pt-10 pb-3 text-secondary">{title}</h5>
                  <p className="text-gray">{description}</p>
                </div>

                <button className="flex items-center font-bold text-xl pt-7 text-secondary">
                  Read More{' '}
                  <span className="mt-[2px] ml-2">
                    <BsChevronRight />
                  </span>
                </button>
              </div>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoreBlogs
