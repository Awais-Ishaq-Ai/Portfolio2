
import './App.css'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Projects from './Component/Projects/Projects'
import Services from './Component/Services/Services'
import Testimonials from './Component/Testimonials/Testimonials'
import Footer from './Reuseable/Footer'

import Navbar from './Reuseable/Navbar'

function App() {

  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Services/>
   <Projects/>
   <Testimonials/>
   <Footer/>
   </>
  )
}

export default App
