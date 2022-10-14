import React from 'react'
import './Footer.css'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer (){
  return (
    <div className='footer'>
      <h3 className="fra">FRANHEL <span className="spex">HOME RETOUCH</span></h3>
        <section className='sec1'>
            <p className='footer-body'>
              Franhel enables home owners and renters <br/>
              to inquire and receive house renovation services<br/>
              at the comfort of their coach.<br/>
           </p>
             
      
        <div className='sec2'>
            <h4 className="title2">About Us </h4> 
            <ul>
              <li>Our Story</li>
              <li>Login</li>
              <li>Register</li>
              <li>ShowRoom</li>
            </ul> 
        </div>
        <div className='sec3'>
            <h4 className='title'>Quick Links </h4> 
            <ul>
              <li>Privacy Policy</li>
              <li>Management</li>
              <li>Help Centre</li>
              <li>Blog</li>
            </ul> 
        </div>
        </section>
        
        <hr/>
        <div className ="social">

        <TwitterIcon size="large"
        aria-label="add" 
        sx={{width:40, height:40, marginLeft:2}} />
        <LinkedInIcon size="large"
        aria-label="add" 
        sx={{width:40, height:40, marginLeft:2}} />
        <FacebookRoundedIcon size="large"
        aria-label="add" 
        sx={{width:40, height:40, fontsize: "40px", marginLeft: 2}} />

        <div className='copy'>All Rights Reserved @2022 </div>
        </div>
        </div>
  )
}

export default Footer