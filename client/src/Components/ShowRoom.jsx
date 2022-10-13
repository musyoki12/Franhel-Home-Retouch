import React from 'react'


import './ShowRoom.css'

import Data from './Data'
import Card from './Card'


function ShowRoom (){
 
  return (
    <div>
    <h1 className='show'>Our ShowRoom</h1>
    <div className ="row">
   <Card details ={Data}/>
   </div>
    </div>
  )
}

export default ShowRoom