
import './App.css'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Projects from './Component/Projects/Projects'
import Services from './Component/Services/Services'

import Navbar from './Reuseable/Navbar'

function App() {

  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Services/>
   <Projects/>
   </>
  )
}

export default App
