import React from 'react'
import { Route,Routes } from 'react-router-dom' 
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path= '/Contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App