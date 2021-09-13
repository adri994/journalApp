import React from 'react'
import { Link } from 'react-router-dom'


const RegisterPage = () => {
  return (
<>
      <h3 className="auth__title">Login</h3>

      <form action="">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off" />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input" />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input" />

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
