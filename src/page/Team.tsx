import BreadCrumb from '@components/ui/BreadCrumb'
import Layout from '@components/ui/Layout'
import bg from '@assets/images/pricing/bg.jpg'
import { GalleryCard } from './Gallery'
import image1 from '@assets/images/team/1.png'
import image2 from '@assets/images/team/2.png'
import image3 from '@assets/images/team/3.png'
import image4 from '@assets/images/team/4.png'
import image5 from '@assets/images/team/5.png'
import { useNavigate } from 'react-router-dom'

const Team = () => {
  const navigate = useNavigate()
  return (
    <Layout title="Our Team">
      <BreadCrumb title="Our Team" img={bg} />
      <section className="bg-white p-xxl">
        <div className="container">
          <div className="container flex flex-wrap justify-around">
            <GalleryCard img={image1} title="David James" description="Engineer" onClick={() => navigate('/team/1')} />
            <GalleryCard img={image2} title="Kevin Martin" description="Engineer" onClick={() => navigate('/team/1')} />
            <GalleryCard
              img={image3}
              title="Sarrah Albert"
              description="Engineer"
              onClick={() => navigate('/team/1')}
            />
            <GalleryCard img={image4} title="Jake Gibson" description="Engineer" onClick={() => navigate('/team/1')} />
            <GalleryCard img={image5} title="Natalie Lee" description="Engineer" onClick={() => navigate('/team/1')} />
            <GalleryCard img={image1} title="Max Oliver" description="Engineer" onClick={() => navigate('/team/1')} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Team
