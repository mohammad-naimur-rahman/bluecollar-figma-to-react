import quote from '@assets/images/homepage/quote.png'
import comment from '@assets/images/blog/comment.png'

const BlogComment = () => {
  return (
    <section className="p-xl bg-bg">
      <div className="container max-w-[765px] mx-auto text-center">
        <div className="p-5 rounded-full bg-primary aspect-square inline-flex justify-center items-center">
          <img src={quote} alt="quote" />
        </div>

        <p className="py-8 italic text-2xl md:text-xl text-gray leading-relaxed">
          Pellentesque vehicula eros neque, maximus mattis est sagittis facilisi.{' '}
          <span className="text-secondary font-bold text-2xl md:text-xl">”In sed pretium metus”</span>. Ppretium id urna
          sit amet tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in elementum tristique
        </p>

        <div className="w-3/4 h-[1px] bg-gray bg-opacity-30 mx-auto mb-5" />

        <img src={comment} alt="Nancy Luther" className="mx-auto w-[70px] h-[70px] rounded-full" />
        <p className="py-2 font-bold text-secondary">Nancy Luther</p>
        <p className="text-sm text-gray">New York</p>
      </div>
    </section>
  )
}

export default BlogComment
