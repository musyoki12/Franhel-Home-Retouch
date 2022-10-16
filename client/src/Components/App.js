import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AboutUs from './AboutUs'
import Services from './Services'
import Navbar from './Navbar'
import ShowRoom from './ShowRoom'
import Footer from './Footer'
import LoginPage from './LoginPage'



function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then((resp) => {
      if (resp.ok){
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])


  return (
    <>
      {user ? (
        <Router>
          <Navbar user={user} setUser={setUser}/>
          <Routes>
            <Route exact path='/' element={<ShowRoom user={user}/>}></Route>
            <Route  path='/about' element={<AboutUs />}></Route>
            <Route  path='/services' element={<Services user={user} setUser={setUser}/>}></Route>
            <Route path='/login' element={ user ? (<Services user={user}/>):(<LoginPage onLogin={setUser}/>)}></Route>
          </Routes>
          <Footer />
        </Router>

      ):( 
        <Router>
          <Navbar />

          <Routes> 
            <Route exact path='/' element={<ShowRoom />}></Route>
            <Route  path='/about' element={<AboutUs />}></Route>
            <Route  path='/contact-us' element={<ContactUs />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
          </Routes>

          <Footer />
      </Router>
       )} 
    </>
  )
}

export default App