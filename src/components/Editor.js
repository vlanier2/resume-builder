import React from 'react'
import Button from './Button'
import TestEditorElement from './editorElements/TestEditorElement'
import AddElement from './AddElement'

const Editor = ({ elements }) => {
  return (
    <div id='editor'>
      <AddElement/>
      {elements.map( (element, i) => (<TestEditorElement key={i} element_name={element.element_name} prps={element.prps}/>) )}
    </div>
  )
}

export default Editor