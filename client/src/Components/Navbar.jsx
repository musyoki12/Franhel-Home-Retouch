import React from 'react'


import './Navbar.css'

// import Container from "react-bootstrap/Container"


function Navbar() {
  return (
    
    <div className='bg-img'>
    <div className='container m-0 '>
      <nav className="navbar navbar-expand-lg bg-light m-2">
  <div className="container-fluid">
    <a className="navbar-brand ">Franhel HOME <br/><span> RETOUCH</span></a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active ml-20" aria-current="page" href="#">About Us</a>
        <a className="nav-link ml-3" href="#">Contact Us</a>
        <a className="nav-link ml-3" href="#">Login</a>
       
      </div>
      <button type="button" id ="btx" className ="btn btn-danger ml-auto ">Create an Account</button>

    </div>
  </div>
</nav>
  <p className='para'>
<h1 className='txt'>Franhel Home Retouch </h1>
<h1 className='txt-2'>transform your house to a Home</h1>
<p></p>
</p>
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