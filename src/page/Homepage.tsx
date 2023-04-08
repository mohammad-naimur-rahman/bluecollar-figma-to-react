import Layout from '@components/ui/Layout'
import HeroSection from '@components/page/Homepage/HeroSection'
import SecondSection from '@components/page/Homepage/SecondSection'
import MainServices from '@components/page/Homepage/MainServices'
import OurServices from '@components/page/Homepage/OurServices'
import WhyChooseUs from '@components/page/Homepage/WhyChooseUs'
import RecentWorks from '@components/page/Homepage/RecentWorks'
import TestimonialsAndForm from '@components/page/Homepage/TestimonialsAndForm'
import PriceAndPlan from '@components/page/Homepage/PriceAndPlan'
import BlogAndArticles from '@components/page/Homepage/BlogAndArticles'

const Homepage = () => {
  return (
    <Layout title="Homepage">
      <HeroSection />
      <SecondSection />
      <MainServices />
      <OurServices />
      <WhyChooseUs />
      <RecentWorks />
      <TestimonialsAndForm />
      <PriceAndPlan />
      <BlogAndArticles />
    </Layout>
  )
}

export default Homepage
