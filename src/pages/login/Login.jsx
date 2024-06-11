import React, { useState } from 'react'
import { loginUserApi } from '../../apis/Api'
import { toast } from 'react-toastify'

const Login = () => {

  // use State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // error state
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // validation
  var validation = () => {
    let isValid = true;

    if (email === '' || email.includes('@' === false)) {
      setEmailError('Email is empty or invalid')
      isValid = false
    }
    if (password.trim() === '') {
      setPasswordError('Password is empty')
      isValid = false
    }

    // return the value
    return isValid;

  }

  // login function
  const handleLogin = (e) => {
    e.preventDefault()

    // validation
    if (!validation()) {
      return;
    }

    // Making json object
    const data = {
      "email": email,
      "password": password
    }

    // Making api request (Same as Register)
    loginUserApi(data).then((res) => {

      // Success :true/false, Message
      if (res.data.success === false) {
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)

        // Received data : success-bool, msage-string, token-string, userData- json object

        // 1. Set token
        localStorage.setItem('token', res.data.token)

        // 2. Convert json object
        const convertedData = JSON.stringify(res.data.userData)

        // 3. Set user data in local storage
        localStorage.setItem('user', convertedData)

      }

    })


  }


  return (
    <div className='container'>

      <h1>Login to your Account!</h1>

      <form className='w-50'>
        <label>Enter your email : {email}</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-control' placeholder='Enter your email address' />

        {
          emailError && <p className='text-danger'>{emailError}</p>
        }

        <label className='mt-2'>Enter your password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="email" className='form-control' placeholder='Enter your password' />

        {
          passwordError && <p className='text-danger'>{passwordError}</p>
        }

        <button onClick={handleLogin} className='btn btn-danger w-100 mt-2'>Login</button>

      </form>

    </div>
  )
}

export default Login