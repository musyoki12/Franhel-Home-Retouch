import React from 'react'

function Card (props) {
  return (
    <>
    {props.details.map((value,index) =>(
    <div className='col'>
    <div className="card" key={index} style={{width: 18 + 'rem'}}>
    <img src={value.img} style={{height:18 + 'rem',width:18 + 'rem'}}alt="House" className="image"/>
    <div className="card-body">
      <h5>Address:{value.address}</h5>
        <h5>Service:{value.service}</h5>
        <h5>Year:{value.year}</h5>
    </div>
    </div></div>
    ))}
    </>
  )
}

export default Card