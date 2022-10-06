import React from 'react'
import Name from './resumeElements/Name'
import Name_header from './Name_header'

const elements = [
    {
        key : 1,
        element_type: Name,
        args : {text: 'Vincent Lanier'}
    },
    {
      key : 2,
      element_type: Name_header,
      args : {
        list_len: 4,
        list_content: ['ONE', 'TWO', 'THREE', 'FOUR']
      }
    }

]

const Elements = () => {
    return (
    <>
      {elements.map( (element) => (<element.element_type args={element.args}/>) )}
    </>
  )
}

export default Elements