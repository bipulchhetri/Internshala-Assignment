import { useState } from 'react'
import './App.css'
import './index.css'
import Navigation from './componets/Navigation'
import HeroSection from './componets/HeroSection'
import Expertise from './componets/Expertise'
import WorksSection from './componets/WorksSection'
import Experience from './componets/Experience'
import BlogList from './componets/BlogList'
import Testimonial from './componets/Testimonial'
import FAQ from './componets/FAQ'
import Banner from './componets/Banner'
import Footer from './componets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navigation/>
     <HeroSection/>
     <Expertise/>
     <WorksSection/>
     <Experience/>
     <BlogList/>
     <Testimonial/>
     <FAQ/>
     <Banner/>
     <Footer/>
    </>
  )
}

export default App
