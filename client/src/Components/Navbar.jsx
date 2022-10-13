import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    
    <div className='bg-img'>
      <div className=''>
        <nav className="navbar navbar-expand-lg nav-color">
          <div className="container-fluid">
            <Link className="navbar-brand " style={{color: "white", fontSize: 17+"px", marginLeft: 1+"vw"}} to="/">Franhel <span style={{color: "orangered"}}> HOME <br/> RETOUCH</span></Link>
            <div className="nav-icon">
              <div className="nav-icons">
                <Link className="icon nav-link" aria-current="page" to="/" >Home</Link>
                <Link className="icon nav-link" to="/about-franhel" >About us</Link>
                <Link className="icon nav-link" to="/services" >Contact us</Link>
                <Link className="icon nav-link" to="/login" >Login</Link>
              </div>
              <button type="button" id ="btx" className ="btn btn-danger ml-auto" >Create account</button>
            </div>
          </div>
        </nav>

        <center className="home-tab">
          <div className='para'>
            <h2 className='txt'>Franhel Home Retouch</h2> 
            <h5 className="txt-2"> transforms your house to a HOME</h5>
          </div>

          <p className='sub'>Subscribe to our newsletter</p>
          <form class="d-flex" role="search">
            <label className='form-label'></label>
            <input class="form-control me-2" type="search" />
            <button class="btn btn-danger color" type="submit">Subscribe</button>
          </form>
        </center>
      </div>
    </div>
  )
  }

export default Navbar