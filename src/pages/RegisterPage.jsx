import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { startRegisterWithEmailPasswordName } from '../actions/auth'
import { setError,  uiRemoveError } from '../actions/ui'


import { useForm } from '../hooks/useForm'

const initialState = {
  name:'Adrian',
  email:'durna@gmail.com',
  password:'123456',
  password2:'123456'
}

const RegisterPage = () => {

  const [ formValues, handleChange ] = useForm(initialState)
  // Para hacer un dispatch
  const dispatch = useDispatch()
  // Para la informacion
  const { msgError } = useSelector(state => state.ui)

  const  { name, email, password, password2 } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    if ( isFormValid() ){
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
      
    }
  }

  const isFormValid = () =>{
    if( name.trim().length === 0 ) {
      dispatch( setError('no es un nombre correcto') )
      return false
    }else if( !validator.isEmail( email ) ){
      dispatch( setError('no es un email correcto') )
      return false
    }else if( password !== password2 || password.length <= 5){
      dispatch( setError('no es un constraseña correcto') )
      return false
    }
    dispatch( uiRemoveError() )
    return true
  }
  return (
<>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={  handleSubmit }>

        {
          msgError && (
            <div className="auth__alert-error">
              {msgError}
            </div>
          )
        }

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name} 
          onChange={ handleChange }
          />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email} 
          onChange={ handleChange }
          />
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          className="auth__input" 
          onChange={ handleChange }
          />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2} 
          onChange={ handleChange }
          />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>
        <Link
          className="link mt-5"
          to="/auth/login">
          Already registered?
        </Link>
      </form>


    </>
  )
}

export default RegisterPage
