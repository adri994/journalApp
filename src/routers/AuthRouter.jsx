import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//Components
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const AuthRouter = () => {
  return (
    <div class="auth__main">
      <div class="auth__box-container">
        <Switch>

          <Route
            exact
            path="/auth/login"
            component={
              LoginPage
            } />

          <Route
            exact
            path="/auth/register"
            component={
              RegisterPage
            } />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  )
}

export default AuthRouter
