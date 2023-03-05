import Layout from '@components/ui/Layout.jsx'
import HeroSection from '@components/page/Homepage/HeroSection.jsx'
import SecondSection from '@components/page/Homepage/SecondSection.jsx'
import MainServices from '@components/page/Homepage/MainServices.jsx'
import OurServices from '@components/page/Homepage/OurServices.jsx'
import WhyChooseUs from '@components/page/Homepage/WhyChooseUs.jsx'
import RecentWorks from '@components/page/Homepage/RecentWorks.jsx'

const Homepage = () => {
  return (
    <Layout title="Homepage">
      <HeroSection />
      <SecondSection />
      <MainServices />
      <OurServices />
      <WhyChooseUs />
      <RecentWorks />
    </Layout>
  )
}

export default Homepage
