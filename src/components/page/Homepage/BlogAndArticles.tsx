import Heading from '../../ui/Heading'
import icon from '@assets/images/homepage/why-choose-us-icon.png'
import blog1 from '@assets/images/homepage/blog-1.png'
import blog2 from '@assets/images/homepage/blog-2.png'
import { BsChevronRight, BsClockFill, BsPersonFill } from 'react-icons/bs'

const blogs = [
  {
    id: 1,
    img: blog1,
    title: 'Improve Workflow With bluecollar Construction',
    description:
      'Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.',
    writer: 'John Kennis',
    date: '22 April 2023'
  },
  {
    id: 2,
    img: blog2,
    title: 'Understanding Your Home’s Electrical Capacity',
    description:
      'Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.',
    writer: 'John Dough',
    date: '23 March 2023'
  }
]

const BlogAndArticles = () => {
  return (
    <section className="py-32 xl:py-28 lg:py-24 md:py-20 sm:md-16 bg-white">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Heading img={icon} title="Blog & Articles" />
          <h2>Latest News and Articles</h2>
        </div>

        <div className="flex flex-wrap items-stretch justify-center py-10">
          {blogs.map(({ id, img, title, description, writer, date }) => (
            <div key={id} className="w-1/2 sm:w-full">
              <div className="p-10 lg:p-5 md:p-2 sm:p-2 flex flex-col justify-between items-start h-full">
                <div>
                  <div className="relative">
                    <img src={img} alt={title} />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogAndArticles
