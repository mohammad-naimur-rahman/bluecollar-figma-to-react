import Layout from '@components/ui/Layout.jsx'
import BreadCrumb from '@components/ui/BreadCrumb.jsx'
import bg from '@assets/images/about-us/bg.png'

const AboutUs = () => {
  return (
    <Layout title="About Us">
      <BreadCrumb title="About Us" img={bg} />
    </Layout>
  )
}

export default AboutUs
