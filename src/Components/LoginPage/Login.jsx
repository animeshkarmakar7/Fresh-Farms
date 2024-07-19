import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className="login-container">
    <div className='login-page'>
      <h1>Sign Up</h1>
      <div className="fields">
      <form onSubmit={onsubmit}>
<input type="text"  placeholder='Name'/>
<input type="email" name="" id="" placeholder='Enter your Email' />
<input type="password" name="" id="" placeholder='Enter Your Password'/>
</form>
</div>
<button>Submit</button>
    </div>
    </div>
    </>
  )
}

export default Login
