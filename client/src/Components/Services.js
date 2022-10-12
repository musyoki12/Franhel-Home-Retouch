import React, { useEffect, useState } from 'react'
import ServiceList from './ServiceList'



function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("/services")
    .then((resp) => resp.json())
    .then((data) => setServices(data))
  }, [])

  const onDelete = (id) => {
    setServices(services.filter((item) => item.id !== id))
  }


  return (
    <div>
      <h1>Services Log</h1>
      
      {services.map((service) => {
        return(
          <div  key={service.id}>
            <ServiceList
              id={service.id}
              service={service.service}
              location={service.location}
              address={service.address}
              contact_info={service.contact_info}
              description={service.description}
              onDelete={onDelete}
            />
          </div>
        )
      })}
    </div>
  )
}
export default Services