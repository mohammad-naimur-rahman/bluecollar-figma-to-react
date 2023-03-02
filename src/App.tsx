import { Routes, Route, Outlet, Link } from 'react-router-dom'
import AboutUs from './page/AboutUs'
import Blog from './page/Blog'
import ChangeLog from './page/ChangeLog'
import Contactus from './page/Contactus'
import ErrorPage from './page/ErrorPage'
import FAQ from './page/FAQ'
import Gallery from './page/Gallery'
import GallerySingle from './page/GallerySingle'
import Homepage from './page/Homepage'
import Lisences from './page/Lisences'
import Pricing from './page/Pricing'
import ProtectedRoute from './page/ProtectedRoute'
import Service from './page/Service'
import Services from './page/Services'
import Team from './page/Team'
import TeamSingle from './page/TeamSingle'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:service" element={<Service />} />
        <Route path="blogs/:id" element={<Blog />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:id" element={<GallerySingle />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="team" element={<Team />} />
        <Route path="team/:id" element={<TeamSingle />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="protected" element={<ProtectedRoute />} />
        <Route path="lisences" element={<Lisences />} />
        <Route path="changelog" element={<ChangeLog />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <div>
      <nav className="bg-red-400">
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}
