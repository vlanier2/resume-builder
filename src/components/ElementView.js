import React from 'react'
import Button from './Button'
import Elements from './Elements'

const ElementView = ({ elements }) => {
  return (
    <div id='elementview'>
        <div>
          <Elements elements={ elements }/>
        </div>
    </div>
  )
}

export default ElementView