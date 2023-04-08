import Layout from '@components/ui/Layout'
import BreadCrumb from '@components/ui/BreadCrumb'
import bg from '@assets/images/about-us/bg.png'
import FirstSection from '@components/page/AboutUs/FirstSection'
import SecondSection from '@components/page/AboutUs/SecondSection'
import ThirdSection from '@components/page/AboutUs/ThirdSection'

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
