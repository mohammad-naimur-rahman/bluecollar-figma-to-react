import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from 'react-scroll-to-top'

const Wrapper = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop smooth />
    </div>
  )
}

export default Wrapper
