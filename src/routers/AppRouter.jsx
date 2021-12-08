import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { useDispatch } from 'react-redux'
//Components
import JournalPage from '../pages/JournalPage';
import AuthRouter from './AuthRouter';
import { login } from '../actions/auth'
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { startLoadingNotes } from '../actions/notes';


const AppRouter = () => {

  
  const dispatch = useDispatch()
  // esto nos permitira vesperar al firebase
  const [checking, setChecking] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged( auth, async(user) => {

      // El interrogacion vera si tiene algo el objecto y despues verificare el si existe el uid
      if(user?.uid){
        dispatch( login(user.uid, user.displayName) )
        setIsLogged(true)
        dispatch( startLoadingNotes(user.uid) )
      } else {
        setIsLogged(false)
      }
      setChecking(false)

    } )
  },[dispatch])

  if( checking ){
    return (
      <h1>Espere...</h1>
    )
  }
  return (
    <>
      <Router>
        <Switch>
          <PublicRouter
            path="/auth"
            isAuthenticated= { isLogged }
            component={
            AuthRouter
            } />

          <PrivateRouter
            exact
            isAuthenticated= { isLogged }
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
