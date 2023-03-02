import Layout from '@components/ui/Layout.jsx'
import HeroSection from '@components/page/Homepage/HeroSection.jsx'
import SecondSection from '@components/page/Homepage/SecondSection.jsx'
import MainServices from '@components/page/Homepage/MainServices.jsx'

const Homepage = () => {
  return (
    <Layout title="Homepage">
      <HeroSection />
      <SecondSection />
      <MainServices />
    </Layout>
  )
}

export default Homepage
