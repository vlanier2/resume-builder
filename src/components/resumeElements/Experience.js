import React from 'react'

const Experience = ({ prps }) => {
  return (
    <div class="section-info">
            <div class="title bold">{prps.job_title}<span class="time-frame">{prps.timeframe}</span></div>
            <div class="company italics">{prps.company}<span class="location italics">{prps.location}</span></div>
        </div>
  )
}

export default Experience