import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//Components
import JournalPage from '../pages/JournalPage';
import AuthRouter from './AuthRouter';


const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/auth"
            component={
            AuthRouter
            } />

          <Route
            exact
            path='/'
            component={
            JournalPage
            } />
          <Redirect to="/auth/login" /> 
        </Switch>
      </Router>
    </>
  )
}

export default AppRouter
