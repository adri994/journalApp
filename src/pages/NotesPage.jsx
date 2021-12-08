import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activeNotes, startDelete } from '../actions/notes'
import NotesAppBar from '../components/NotesAppBar'
import { useForm } from '../hooks/useForm'

const NotesPage = () => {
  const dispatch = useDispatch()

  const { active:note } = useSelector(state => state.notes)

  const [ formValues, handleChange, reset ] = useForm(note)

  const { title, body, id } = formValues

  // usamos este hook para tenre la referencia del valor anteriror
  const ref = useRef(note.id)

  useEffect(() => {

    if( ref.current !== note.id ){
      reset( note )
      ref.current = note.id
    }

  }, [note, reset])

  // cuando hay un cambio en el formulario
  useEffect(() => {
    dispatch( activeNotes( formValues.id, { ...formValues } ) )
  }, [formValues, dispatch])


  const handleDelete = () =>{
    dispatch( startDelete(id) )
  }
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          name="title" 
          value={ title }
          onChange={ handleChange }
          />

        <textarea
          name="body"
          placeholder="What happened today"
          className="notes__textarea"
          value={ body }
          onChange={ handleChange }
          ></textarea>
          {
            (note.url) &&
              <div className="notes__img">
                <img src={note.url} alt="images" />
              </div>
          }
      </div>

      <button onClick={handleDelete} className="btn btn-danger">
          Delete
      </button>
    </div>
  )
}

export default NotesPage
