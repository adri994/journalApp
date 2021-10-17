import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'

import { useForm } from '../hooks/useForm'
import {startLoginEmailPassword, startGoogleLogin } from '../actions/auth'


const initialState = {
  email:'durna@gmail.com',
  password:'123456',
}

const LoginPage = () => {

  const [ formValues, handleChange ] = useForm(initialState)

  const dispatch = useDispatch()

  const { loading } = useSelector(state => state.ui)
  
  const { email, password } = formValues

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(isFormValid()){     
      dispatch( startLoginEmailPassword( email, password ) )
      
    }
    
    
  }

  const isFormValid = () => {
    if(!validator.isEmail(email)){
      
      return false
    }
    else if(password.length <= 3){
      return false
    }

    return true
  }

  const handleGoogleLogin = () =>{
    dispatch( startGoogleLogin() )
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          placeholder="email"
          name="email"
          className="auth__input"
          autoComplete="off" 
          value={email}
          onChange={handleChange}/>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password} 
          onChange={handleChange}/>

        <button
          disabled={ loading }
          type="submit"
          className="btn btn-primary btn-block"
        >
          Login
        </button>
        <div className="auth__social-networks">
          <hr />
          <p>Login with Social networks</p>
          <div
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link
          className="link"
          to="/auth/register">
          Create new account
        </Link>
      </form>


    </>
  )
}

export default LoginPage
