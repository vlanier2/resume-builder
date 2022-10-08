import React from 'react'

const Experience_desc = ({ prps }) => {
  return (
    <div class="section-info">
            <ul class="bullets-list vertical">
                {prps.list_content.map( (content) => (<li class="bullets-list-element"><span class="bullet"></span>{content}</li>) )}
            </ul>
        </div>
  )
}

export default Experience_desc