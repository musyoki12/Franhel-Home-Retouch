import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    
    <div className='bg-img'>
      <div className='container m-0 '>
        <nav className="navbar navbar-expand-lg bg-light m-2">
        <div className="container-fluid">
        <Link className="navbar-brand " to="/">Franhel HOME <br/><span> RETOUCH</span></Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active ml-20" aria-current="page" to="/" >Home</Link>
            <Link className="nav-link active ml-20" to="/about-franhel" >About us</Link>
            <Link className="nav-link ml-3" to="/contact-section" >Contact us</Link>
            <Link className="nav-link ml-3" to="/login" >Login</Link>
          </div>
            <button type="button" id ="btx" className ="btn btn-danger ml-auto ">Create account</button>

            </div>
          </div>
        </nav>
        <div className='para'>
          <h1 className='txt'>Franhel Home Retouch </h1>
          <h1 className='txt-2'>transform your house to a Home</h1>
        </div>

        <h3 className='sub'>Subscribe To Our Newsletter</h3><br/>
        <form class="d-flex" role="search"> 
          <input class="form-control me-2" type="search" />
          <button class="btn btn-danger" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
  }

export default Navbar