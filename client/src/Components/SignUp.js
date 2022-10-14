import React, { useState } from 'react'
import { TextField, Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "300px"
    },

    '& .MuiButtonBase-root': {
      margin: theme.spacing(2)
    }
  }
}));

function SignUp ({ handleClose, onSignUp }) {

  const classes = useStyles();
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault();

    const newService = {
      name: name,
      username: username,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }

    fetch("/services", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newService)
    })
    .then((resp) => resp.json())
    .then((data) => onSignUp(data))

    handleClose();
  }

  return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField 
          label="Type of service" 
          variant="filled" 
          required
          value={name}
          onChange = {(e) => setName(e.target.value)}
        />

        <TextField 
          label="Location of building" 
          variant="filled" 
          required
          value={username}
          onChange = {(e) => setUsername(e.target.value)}
        />

        <TextField 
          label="Address information" 
          variant="filled" 
          type="email" 
          required
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
        />

        <TextField 
          label="Phone number" 
          variant="filled" 
          type="text"
          required
          value={[password]}
          onChange = {(e) => setPassword(e.target.value)}
        />

       <TextField 
          label="Description of service" 
          variant="filled" 
          type="text"
          required
          value={passwordConfirmation}
          onChange = {(e) => setPasswordConfirmation(e.target.value)}
        />

        <div>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">Send Request</Button>
        </div>
      </form>
  )
}

export default SignUp;