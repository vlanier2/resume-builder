import React from 'react'

const Elements = ( {elements} ) => {
    return (
    <div className='elements'>
      {elements.map( (element) => (<element.element_type key={element.prps.key} prps={element.prps}/>) )}
    </div>
  )
}

export default Elements