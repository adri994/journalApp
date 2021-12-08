import Swal from 'sweetalert2'

import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';

import { types } from '../types'
import { removeLoading, setLoading } from '../actions/ui'
import { clearNotes } from './notes';


// estas funciones sirve para hacer peticiones asincronas
export const startLoginEmailPassword = ( email, password) =>{
  return async (dispatch) =>{
    
    dispatch( setLoading() )
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      
      dispatch( login(user.uid, user.displayName) );
      dispatch( removeLoading() )
    } catch (error) {
      dispatch( removeLoading() )
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

  }
}

// registro de usuario por contraseña
export const startRegisterWithEmailPasswordName= (email, password, name ) =>{
  return async (dispatch) =>{

    try {
      const auth = getAuth()
      const { user } = await createUserWithEmailAndPassword( auth, email, password )
      // poner el nombre en el displayname
      await updateProfile(user,{
        displayName: name
      })

      dispatch ( login( user.uid, user.displayName ) )
      
    } catch (error) {
      console.log(error)
    }
  }
}

export const startGoogleLogin = () =>{
  return async (dispatch) =>{
    const auth = getAuth();
    const { user } = await signInWithPopup(auth, googleAuthProvider)
    dispatch ( login( user.uid, user.displayName ) )
  }
}

export const startLogout = () =>{
  return async (dispatch) => {
    try {
      const auth = getAuth();
      await signOut(auth)
      dispatch( logout() )
      dispatch( clearNotes() )
    } catch (error) {
      console.log(error)
    }
  }
}

export const logout = () => (
  {
    type: types.logout
  }
)


export const login = ( uid, displayName ) =>(
  {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
)
