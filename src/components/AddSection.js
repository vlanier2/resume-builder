import React from 'react'

const AddSection = () => {
  return (
    <form>
        Section: <input type='text' placeholder='SECTION TITLE'/>
        <label>Bold: </label> <input type='checkbox'/>
    </form>
  )
}

export default AddSection