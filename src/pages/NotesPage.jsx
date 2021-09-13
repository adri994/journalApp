import React from 'react'
import NotesAppBar from '../components/NotesAppBar'

const NotesPage = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input" />

        <textarea
          name=""
          placeholder="What happened today"
          className="notes__textarea"
          ></textarea>

          <div className="notes__img">
            <img src="https://i.blogs.es/07fc5b/el-libro-de-imagenes-3/840_560.png" alt="images" />
          </div>
      </div>
    </div>
  )
}

export default NotesPage
