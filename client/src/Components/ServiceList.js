import React, { useState } from 'react'
import UpdateService from './UpdateService'
import { Dialog } from '@material-ui/core'


function ServiceList({ id, onDelete, onUpdate, service, location, address, contact_info, description }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
          <button  onClick={handleOpen}>Edit</button>
          <button onClick={handleDelete}>Cancel request</button>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <UpdateService id={id} onUpdate={onUpdate} handleClose={handleClose}/>
        </Dialog>
        
      </ul>
    </div>
  )
}

export default ServiceList