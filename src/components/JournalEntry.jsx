import React from 'react'

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://i.blogs.es/07fc5b/el-libro-de-imagenes-3/840_560.png)'
        }}></div>
      
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo dia
        </p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}

export default JournalEntry
