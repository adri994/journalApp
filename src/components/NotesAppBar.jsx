import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNotes, startUploading } from '../actions/notes'

const NotesAppBar = () => {

  const dispatch = useDispatch()
  const{ active } = useSelector(state => state.notes)
  
  const saveNotes = () =>{
    dispatch( startSaveNotes(active) )
  }

  const handlePictureClick = () =>{
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = (e) =>{
    const file = e.target.files[0]
    if( file ){
      dispatch( startUploading(file) )
    }
  }
  return (
    <div className="notes__appBar">
      <span>13 Septiembre del 2021</span>
      <input
        type="file"
        id="fileSelector"
        name="file"
        style={{
        display:'none'
        }} 
        onChange={handleFileChange}
        />

      <div>
        <button
          onClick={ handlePictureClick }
          className="btn">
          Picture
        </button>
        
        <button onClick={saveNotes} className="btn" >
          Save
        </button>
      </div>
    </div>
  )
}

export default NotesAppBar
