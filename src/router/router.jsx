import { BrowserRouter, Routes, Route } from "react-router-dom"

//Import Pages
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Portfolio from '../pages/Portfolio/Portfolio'

//Import Components
import Nav from "../components/Nav/Nav"
import Theme from "../components/Theme/Theme"


export default function Router() {
  return (
    <BrowserRouter>
    <Nav/>
    <Theme/>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>       
        <Route path='/contact' element={<Contact />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
    </Routes>
    </BrowserRouter>
  )
}
