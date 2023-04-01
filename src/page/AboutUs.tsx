import Layout from '@components/ui/Layout.jsx'
import BreadCrumb from '@components/ui/BreadCrumb.jsx'
import bg from '@assets/images/about-us/bg.png'
import FirstSection from '@components/page/aboutUs/FirstSection.jsx'
import SecondSection from '@components/page/aboutUs/SecondSection.jsx'
import ThirdSection from '@components/page/aboutUs/ThirdSection.jsx'

const AboutUs = () => {
  return (
    <Layout title="About Us">
      <BreadCrumb title="About Us" img={bg} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Layout>
  )
}

export default AboutUs
