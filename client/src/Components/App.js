import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AboutUs from './AboutUs'
import Services from './Services'
import Navbar from './Navbar'
import ShowRoom from './ShowRoom'



function App() {


  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<ShowRoom />}></Route>
          <Route exact path='/about-franhel' element={<AboutUs />}></Route>
          <Route exact path='/client-area' element={<Services />}></Route>
        </Routes>

    </Router>
  )
}

export default App