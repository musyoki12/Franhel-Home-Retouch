import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { Link } from 'react-router-dom'



function LoginPage({ onLogin, setUser }) {

  const [showLogin, setShowLogin] = useState(true)



  return (
    <center className='loginpage'>
      <h3>Login or create an account</h3>
        {showLogin ? (
      <>
        <Login onLogin={onLogin} setUser={setUser}/>
        {/* <Divider /> */}
        <p>
          Don't have an account? 
          <button onClick={() => setShowLogin(false)}>Sign up</button>
        </p>
      </>
    ):(
      <>
        <SignUp onLogin={onLogin} />
        {/* <Divider /> */}
        Already have an account?
        <button onClick={() => setShowLogin(true)}>Login</button>
      </>
      )}
      Not interested? Go back to <Link to="/" >Home</Link>
    </center>
  )
}

export default LoginPage