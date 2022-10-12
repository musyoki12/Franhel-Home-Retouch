import React from 'react'


function ServiceList({ id, onDelete, service, location, address, contact_info, description }) {

  const handleEdit = () => {

  }

  const handleDelete = () => {
    fetch(`/services/${id}`, {
      method: "DELETE",
    })
    onDelete(id)
  }

  return (
    <div>
      <ul>
        <p>{service}</p>
        <li>{location}</li>
        <li>{address}</li>
        <li>{contact_info}</li>
        <li>{description}</li>
        <div>
          <button onClick={handleEdit}>Edit request</button>
          <button onClick={handleDelete}>Cancel request</button>
        </div>
        
      </ul>
    </div>
  )
}

export default ServiceList