import React from 'react'
import './Footer.css'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer (){
  return (
    <div className='footer'>
      <h3 className="fra">FRANHEL HOME RETOUCH</h3>
        <section className='sec1'>
            <p>Lorem Ipsum is simply dummy <br/>
            text of the printing and typesetting<br/>
             industry. Lorem Ipsum has been the<br/>
              industry's standard dummy text ever since<br/>
               the 1500s, when an unknown printer book
               </p>
             
      
        <div className='sec2'>
            <h4>Quick Links </h4> 
            <br/>
            <ul>
              <li>Our Story</li>
              <li>Login</li>
              <li>Register</li>
              <li>ShowRoom</li>
            </ul> 
        </div>
        </section>
        
        <hr/>
        <div className ="social">
        <TwitterIcon/>
        <LinkedInIcon/>
        <FacebookRoundedIcon/>

        <div className='copy'>All Rights Reserved @2022 </div>
        </div>
        </div>
  )
}

export default Footer