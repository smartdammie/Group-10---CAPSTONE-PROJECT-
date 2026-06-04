import { useRef } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import VideoSection from './components/VideoSection/VideoSection'
import PlanetGrid from './components/PlanetGrid/PlanetGrid'
import DataTable from './components/DataTable/DataTable'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const planetSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  const scrollToPlanets = () => {
    planetSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar onContactClick={scrollToContact} />
      <Hero onExploreClick={scrollToPlanets} onContactClick={scrollToContact} />
      <VideoSection />
      <PlanetGrid ref={planetSectionRef} />
      <DataTable />
      <ContactForm ref={contactSectionRef} />
      <Footer />
    </>
  )
}

export default App
