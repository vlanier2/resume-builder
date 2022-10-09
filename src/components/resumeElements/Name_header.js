import React from 'react'

const Name_header = ({ prps }) => {

  return (
    <nav id="name_header" className="centered">
            <ul className="bullets-list horizontal">

                {prps.list_content.map( (content, i) => (

                    <li key={i} className="bullets-list-element">
                    <a href="">{content}</a> <span className="bullet-bar"></span>
                    </li>

                ))}
            </ul>
        </nav>
    )
}

export default Name_header