import React from 'react'
import Button from './Button'
import TestEditorElement from './editorElements/TestEditorElement'
import AddElement from './AddElement'

const Editor = ({ elements }) => {
  return (
    <div id='editor'>
      <span>Elements</span>
      <Button text='New Element' color='green'/>
      <AddElement/>
      {elements.map( (element) => (<TestEditorElement element_name={element.element_name} prps={element.prps}/>) )}
    </div>
  )
}

export default Editor