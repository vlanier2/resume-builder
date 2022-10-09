import React from 'react'

const AddElement = () => {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Element</label>

            <select id='select-elements'>
                <option>Name Header</option>
                <option>Section</option>
                <option>Experience</option>
            </select>

            <input type='text' placeholder='textplaceholder'/>
            <input type='submit' value='UPDATE ELEMENT'/>

        </div>
    </form>
  )
}

export default AddElement