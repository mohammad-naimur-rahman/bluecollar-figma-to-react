import Layout from '@components/ui/Layout.jsx'
import BreadCrumb from '@components/ui/BreadCrumb.jsx'
import breadcrumbImg from '@assets/images/services/breadcrumb.png'
import MainServices from '@components/page/Services/MainServices.jsx'
import OurServices from '@components/page/HomePage/OurServices.jsx'

const Services = () => {
  return (
    <Layout title="Services">
      <BreadCrumb title="Services" img={breadcrumbImg} />
      <MainServices />
      <OurServices />
    </Layout>
  )
}

export default Services
