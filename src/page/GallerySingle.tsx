import BreadCrumb from '@components/ui/BreadCrumb'
import Layout from '@components/ui/Layout'
import bg from '@assets/images/gallery-single/bg.jpg'
import hero from '@assets/images/gallery-single/hero.png'
import image1 from '@assets/images/gallery-single/1.png'
import image2 from '@assets/images/gallery-single/2.png'
import image3 from '@assets/images/gallery-single/3.png'

const CardItems = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div>
      <p className="font-bold text-secondary">{title} :</p>
      <p className="text-gray">{desc}</p>
      <div className="h-[1px] w-full bg-gray bg-opacity-30 my-3" />
    </div>
  )
}

const GalleryCard = ({ img, title, description }: { img: string; title: string; description: string }) => {
  return (
    <div className="p-4 xl:p-2 sm:p-0 sm:pb-3 w-1/3 lg:w-1/2 sm:w-full text-center cursor-pointer">
      <div className="p-5 xl:p-2 lg:p-4 xsm:p-2 bg-white h-full border-[1px] border-gray border-opacity-30">
        <img src={img} alt={title} className="w-full h-auto object-cover" />
        <h6 className="text-secondary pt-4 pb-1">{title}</h6>
        <p className="text-gray">{description}</p>
      </div>
    </div>
  )
}

const GallerySingle = () => {
  return (
    <Layout title="Gallery Single">
      <BreadCrumb img={bg} title="Industry Machine Issue" />
      <section className="bg-white p-xl">
        <div className="container">
          <div className="flex md:flex-col gap-10 lg:gap-5">
            <div className="w-[345px] md:w-full px-8 lg:px-4 py-12 lg:py-6 bg-bg">
              <p className="text-xl font-bold text-secondary">Project Information</p>
              <div className="flex items-center py-2">
                <div className="w-12 h-[2px] bg-primary" />
                <div className="h-[1px] w-full bg-gray bg-opacity-30" />
              </div>
              <CardItems title="Client" desc="Choose a Plan work" />
              <CardItems title="Location" desc="New York, Uniter States" />
              <CardItems title="Project Date" desc="15 December, 2022" />
              <CardItems title="Category" desc="Service" />
              <CardItems title="Value" desc="$2 250 000" />
            </div>
            <div>
              <img src={hero} alt="Project Information" className="h-full object-cover" />
            </div>
          </div>

          <div className="p-xl text-gray [&>p]:py-3">
            <h2 className="text-secondary">Project Description</h2>
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
              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
              users after installed base benefits. Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </p>
          </div>

          <h2 className="text-secondary pl-4 xl:pl-2 sm:pl-0 pb-2 md:pb-5">Related Projects</h2>
          <div className="flex flex-wrap justify-between">
            <GalleryCard title="Electrical & Maintenance" description="House, office" img={image1} />
            <GalleryCard title="Industry Machine Issue" description="House, office" img={image2} />
            <GalleryCard title="Industry Machine Issue" description="House, office" img={image3} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default GallerySingle
