import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AboutUs from './AboutUs'
import Services from './Services'
import Navbar from './Navbar'
import ShowRoom from './ShowRoom'
import Footer from './Footer'



function Home() {



  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<ShowRoom />}></Route>
        <Route exact path='/about-franhel' element={<AboutUs />}></Route>
        <Route exact path='/services' element={<Services />}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default Home