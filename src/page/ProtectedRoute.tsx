import bg from '@assets/images/pricing/bg.jpg'
import BreadCrumb from '@components/ui/BreadCrumb'
import Layout from '@components/ui/Layout'
import lockIcon from '@assets/images/protected/lock.png'
import Input from '@components/ui/Input'
import Button from '@components/ui/Button'

const ProtectedRoute = () => {
  return (
    <Layout title="Protected Route">
      <BreadCrumb img={bg} title="Password Protected" />
      <section className="bg-white p-xl px-5">
        <div className="px-16 lg:p-10 md:p-5 py-14 flex flex-col max-w-[720px] mx-auto text-center border-[1px] border-gray border-opacity-30">
          <img src={lockIcon} alt="Protected Route" className="w-28 h-auto mx-auto" />
          <h3 className="text-secondary py-3">Protected Page</h3>
          <p className="text-gray pb-5">
            This page is password protected. If you are the website admin, or have access to this page, please type your
            password below.
          </p>
          <Input placeholder="Enter Your Password" type="password" className="w-full" />
          <Button>Enter Now</Button>
        </div>
      </section>
    </Layout>
  )
}

export default ProtectedRoute
