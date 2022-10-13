import React from 'react'

function Card (props) {
  return (
    <>
    {props.details.map((value,index) =>(
    <div className='col' style={{margin: 2+"vh"}}>
      <div className="card" key={index} style={{width: 20 + 'vw'}}>
        <img src={value.img} style={{height:40 + 'vh', width:20 + 'vw'}} alt="House" className="image"/>
        <div className="card-body">
          <h5>Address:{value.address}</h5>
          <h5>Service_type:{value.service_type}</h5>
          <h5>Year:{value.year}</h5>
        </div>
      </div>
    </div>
    ))}
    </>
  )
}

export default Card