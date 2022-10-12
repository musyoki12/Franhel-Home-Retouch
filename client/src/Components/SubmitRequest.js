import React, { useState } from "react";
import { Button, Dialog } from '@material-ui/core'
import NewServiceForm from "./NewServiceForm";


function SubmitRequest() {

 const [open, setOpen] = useState(false);

 const handleOpen = () => {
   setOpen(true)
 }

 const handleClose = () => {
   setOpen(false)
 }

  return (
     <div className="signUp">
       <Button variant="contained" color="primary" onClick={handleOpen}>
         Request for a service
       </Button>

       <Dialog open={open} onClose={handleClose}>
         <NewServiceForm handleClose={handleClose}/>
       </Dialog>
     </div>
  )
}

export default SubmitRequest;