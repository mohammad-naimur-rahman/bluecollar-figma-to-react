import BreadCrumb from '@components/ui/BreadCrumb'
import Layout from '@components/ui/Layout'
import bg from '@assets/images/pricing/bg.jpg'
import PriceAndPlan from '@components/page/Homepage/PriceAndPlan'
import Button from '@components/ui/Button'
import ServicePricing from '@components/page/Pricing/ServicePricing'

const Pricing = () => {
  return (
    <Layout title="Pricing">
      <BreadCrumb img={bg} title="Pricing" />
      <div className="bg-bg">
        <div className="container">
          <PriceAndPlan headerTitle="Subscription" />
        </div>
      </div>
      <div className="bg-white p-xl">
        <div className="container">
          <div className="flex flex-col text-center">
            <h2 className="text-secondary">Our Packages</h2>
            <p className="text-gray max-w-xl mx-auto">
              Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
              pretium id urna sit amet tincidunt.
            </p>
            <div className="py-5">
              <Button variant="white" className="px-10 !py-3">
                Monthly
              </Button>
              <Button className="px-10 !py-3">Annually</Button>
            </div>
          </div>
          <ServicePricing />
        </div>
      </div>
    </Layout>
  )
}

export default Pricing
