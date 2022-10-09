import React from 'react'

const Experience = ({ prps }) => {
  return (
    <div class="section-info">
            <div className="title bold">{prps.job_title}<span className="time-frame">{prps.timeframe}</span></div>
            <div className="company italics">{prps.company}<span className="location italics">{prps.location}</span></div>
        </div>
  )
}

export default Experience