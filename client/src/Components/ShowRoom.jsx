import React from 'react'
import { Link } from '@material-ui/core'
import './ShowRoom.css'
import Data from './Data'
import Card from './Card'


function ShowRoom (){
 
  return (
    <div>
    <h1 className='show'>Our ShowRoom</h1>
      <div className ="row style">
        <Card details ={Data}/>
      </div>

      <center className="color">
        <h1 className='show'>Our Services</h1>
        <div className='flex'>
          <div className='service-cards'>
            <img src=''/>
            <h5>Renovation</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <Link style={{color: "#ff4500"}}>Read more...</Link>
          </div>

          <div className='service-cards service-cards-two'>
            <img src=''/>
            <h5>Electrical</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <Link style={{color: "white"}}>Read more...</Link>
          </div>

          <div className='service-cards'>
            <img src=''/>
            <h5>Painting</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <Link style={{color: "#ff4500"}}>Read more...</Link>
          </div>

          <div className='service-cards'>
            <img src=''/>
            <h5>Plumbing</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <Link style={{color: "#ff4500"}}>Read more...</Link>
          </div>
        </div>
      </center>
    </div>
  )
}

export default ShowRoom