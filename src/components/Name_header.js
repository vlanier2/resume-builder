import React from 'react'

const Name_header = ({args}) => {
  return (
    <nav id="name_header" className="centered">
            <ul className="bullets-list horizontal">

                
                {args.list_content.map( (content) => (

                    <li className="bullets-list-element">
                    <a href="">{content}</a> <span className="bullet-bar"></span>
                    </li>

                ))}
            </ul>
        </nav>
    )
}

export default Name_header