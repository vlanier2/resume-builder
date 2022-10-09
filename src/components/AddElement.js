import React from 'react'
import { useState } from 'react'
import AddNameHeader from './AddNameHeader'
import AddSection from './AddSection'

const AddElement = () => {

  return (
    <div className='add-form'>
          <label>Element</label>

          <select id='select-elements'>
              <option>Name Header</option>
              <option>Section</option>
              <option>Experience</option>
          </select>
          <input type='submit' value='ADD ELEMENT'/>
      <AddNameHeader/>
      <AddSection/>
    </div>
  )
}

export default AddElement