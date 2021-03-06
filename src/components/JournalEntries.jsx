import React from 'react'
import { useSelector } from 'react-redux'
import JournalEntry from './JournalEntry'

const JournalEntries = () => {

  const { notes } = useSelector(state => state.notes)

  return (
    <div className="journal__entries">
      {
        notes.map(entry=>(
          <JournalEntry
            {...entry} 
            key={ entry.id }
          />
        ))
      }
    </div>
  )
}

export default JournalEntries
