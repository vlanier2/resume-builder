import React from 'react'
import Button from './Button'
import Elements from './Elements'

const ElementView = () => {
  return (
    <div id='elementview'>

        <span>Elements</span>
        <Button text='New Element' color='green'/>
        <div>
          <Elements/>
        </div>
    </div>
  )
}

export default ElementView