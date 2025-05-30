import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/nav'
import AboutUs from './sections/AboutUs'
import Contact from './sections/ContactUs'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <AboutUs/>
    <Contact/>
  </StrictMode>,
)
