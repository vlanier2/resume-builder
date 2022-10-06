import React from 'react'

const Name = ({ args }) => {
  return (
        <h1 id="name" className="centered bold huge">{args.text}</h1>
  )
}

export default Name