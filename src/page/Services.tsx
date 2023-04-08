import Layout from '@components/ui/Layout.jsx'
import BreadCrumb from '@components/ui/BreadCrumb'
import breadcrumbImg from '@assets/images/services/breadcrumb.png'
import MainServices from '@components/page/Services/MainServices.jsx'
import LastSection from '@components/page/Services/LastSection.jsx'
import OurServices from '@components/page/HomePage/OurServices.jsx'

const Services = () => {
  return (
    <Layout title="Services">
      <BreadCrumb title="Services" img={breadcrumbImg} />
      <MainServices />
      <OurServices />
      <LastSection />
    </Layout>
  )
}

export default Services
