import React from 'react'

const Experience_desc = ({ prps }) => {
  return (
    <div className="section-info">
            <ul className="bullets-list vertical">
                {prps.list_content.map( (content, i) => (<li key={i} className="bullets-list-element"><span className="bullet"></span>{content}</li>) )}
            </ul>
        </div>
  )
}

export default Experience_desc