import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Contact from './Pages/Conatct'
import Product from './Pages/product'
import About from './Pages/About'
import NotFound from './Pages/notfound'
import Menz from './Pages/Menz'
import  Women  from './Pages/Women'
import ProductDetail from './Pages/ProductDetail'
import Navbar2 from './Components/Navbar2'

const App = () => {
  return (
    <>
    <Navbar />
    <Navbar2 />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Product' element={<Product/>}>
        <Route path='Menz' element={<Menz/>}/>
        <Route path='Women' element={<Women/>}/>
      </Route>
      <Route path='/Product/:ID' element={<ProductDetail/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='*' element = {<NotFound/>}></Route>
    </Routes>
    <Footer />
    </>
  )
}

 export default App