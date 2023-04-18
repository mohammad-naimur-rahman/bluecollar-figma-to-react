import bg from '@assets/images/pricing/bg.jpg'
import BreadCrumb from '@components/ui/BreadCrumb'
import Button from '@components/ui/Button'
import Layout from '@components/ui/Layout'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Layout title="Page Not Found">
      <BreadCrumb title="Page Not Found" img={bg} />
      <div className="bg-bg pt-10 pb-xl">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-secondary text-[300px] xl:text-[250px] lg:text-[200px] md:text-[100px] sm:text-[70px]">
            404
          </h1>
          <h3 className="text-primary">Oops! That page can't be found</h3>
          <p className="text-gray">Sorry, but the page you are looking for does not existing</p>
          <Link to="/">
            <Button className="!px-10 lg:px-5 !py-3 lg:py-2 mt-5">Go To Home</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default ErrorPage
