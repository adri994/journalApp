import React from 'react'
// import NothingSelected from '../components/NothingSelected'
import Sidebar from '../components/Sidebar'
import NotesPage from './NotesPage'

const JournalPage = () => {


  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        {/* <NothingSelected /> */}
        <NotesPage />
      </main>
    </div>
  )
}

export default JournalPage
