import { addDoc, collection, deleteDoc, doc, setDoc } from "@firebase/firestore"
import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types"
import Swal from 'sweetalert2'
import { fileUpload } from "../helpers/uploadImage"
// poner true para permitirme usarlo

export const startNewNote = () =>{
  // segundo parametro te da el state de redux
  return async( dispatch, getState ) =>{

    const uid = getState().auth.uid
    
    const newNotes = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    // Path como los colocara en la base de datos
    // Configuracion en firestore (reglas)  request.auth !=null;
    const docRef = await addDoc( collection( db, `${uid}/journal/notes` ), newNotes )
    dispatch( activeNotes(docRef.id, newNotes) )
  }
}

export const startLoadingNotes = (uid) =>{
  return async(dispatch) =>{
    const note = await loadNotes(uid)
    dispatch( setNotes(note) )
  }
}

export const activeNotes = ( id, notes) =>({
  type: types.notesActive,
  payload: {
    id,
    ...notes
  }
})

export const setNotes = (notes) =>({
  type:types.notesLoad,
  payload: notes
})
export const refreshNote = (id, note) =>({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
})

export const startSaveNotes = ( note ) =>{
  return async (dispatch,getState) =>{
    const uid = getState().auth.uid

    if(!note.url){
      delete note.url
    }
    const noteToFirebase = { ...note }
    delete noteToFirebase.id

    const updateUser = doc(db, `${uid}`, 'journal', 'notes', `${note.id}`)
    await setDoc(updateUser, noteToFirebase);

    dispatch(refreshNote(note.id, noteToFirebase))
    Swal.fire('Saved', note.title,'success')
    
  }
}

export const startUploading = (file) =>{
  return async(dispatch, getState) =>{
    const { active:activeNotes } = getState().notes

    Swal.fire({
      title:'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      onBeforeOpen: function () {
        Swal.showLoading()
      }
    })
    const fileUrl = await fileUpload(file)

    activeNotes.url = fileUrl
    dispatch( startSaveNotes(activeNotes) )

    Swal.close()
  }
}


export const startDelete = (id) =>{
  return async(dispatch,getState)=>{
    const uid = getState().auth.uid

    const deleteUser = doc(db, `${uid}`, 'journal', 'notes', `${id}`)

    await deleteDoc(deleteUser);
    dispatch(deleteAction(id))

  }
}

export const deleteAction = (id) =>({
  type: types.notesDelete,
  payload: {
    id
  }
})

export const clearNotes = () =>({
  type: types.notesLogoutCleaning
})

