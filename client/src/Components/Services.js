import React, { useEffect, useState } from 'react'



function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("/services")
    .then((resp) => resp.json())
    .then((data) => setServices(data))
  }, [])

  console.log(services)

  return (
    <div>
      <h1>Services Log</h1>
      
      {services.map((service) => {
        return(
          <div  key={service.id}>
            <ul>
              <p>{service.service}</p>
              <li>{service.location}</li>
              <li>{service.address}</li>
              <li>{service.contact_info}</li>
              <li>{service.description}</li>
            </ul>
          </div>
        )
      })}

    </div>
  )
}
export default Services