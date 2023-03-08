import { Routes, Route, Link } from 'react-router-dom'
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
import Wrapper from './components/ui/Wrapper'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Homepage />} />
        <Route path="about-us" element={<AboutUs />} />
        {/* <Route path="services" element={<Services />} />
        <Route path="services/:service" element={<Service />} /> */}
        <Route path="services" element={<Services />}>
          <Route path=":service" element={<Service />} />
        </Route>
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
        <Route path="error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}
