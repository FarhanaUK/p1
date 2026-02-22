import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ServicePage from './pages/ServicePage'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'

function App() {


  return (
    <div>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/services" element={<ServicePage />}/>
    </Routes>

    <Footer/>
    </div>
  )
}

export default App
