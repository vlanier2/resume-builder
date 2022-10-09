import React from 'react'

const TestEditorElement = ({ element_name, prps }) => {
  return (
    <div>
        <h2>{element_name} -- key: {prps.key}</h2> 
    </div>
  )
}

export default TestEditorElement