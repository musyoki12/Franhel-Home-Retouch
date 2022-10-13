import React, { useEffect, useState } from 'react'
import ServiceList from './ServiceList'
import SubmitRequest from './SubmitRequest'



function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("/services")
    .then((resp) => resp.json())
    .then((data) => setServices(data))
  }, [])

  const handleDelete = (id) => {
    setServices(services.filter((item) => item.id !== id))
  }

  const handleAddService = (newService) => {
    setServices([...services, newService])
  }

  const handleUpdate = (updatedService) => {
    const updatedArray = services.map((service) => {
      return service.id === updatedService.id ? updatedService : service
    })
    setServices(updatedArray)
  }

  return (
    <div>
      <SubmitRequest onAddService={handleAddService}/>
      <center style={{margin: 5+"vh"}} ><h1>Welcome {"{User}"}</h1></center>
      <div className='client-area'>
        <div>
          User stats
        </div>
        <div className='services-log'>
          <h4>Services Log</h4>
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
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Services