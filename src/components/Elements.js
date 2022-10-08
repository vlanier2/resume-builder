import React from 'react'
import Name from './resumeElements/Name'
import Name_header from './resumeElements/Name_header'
import Section_category from './resumeElements/Section_category'
import Experience from './resumeElements/Experience'
import Experience_desc from './resumeElements/Experience_desc'

const elements = [
    {
      key : 1,
      element_type: Name,
      prps : {
        text: 'Vincent Lanier',
        classes: ''
      }
    },

    {
      key : 2,
      element_type: Name_header,
      prps : {
        list_len: 4,
        list_content: ['ONE', 'TWO', 'THREE', 'FOUR'],
        classes: ''
      }
    },

    {
      key : 3,
      element_type: Section_category,
      prps: {
        text: 'SECTION 1',
        underline: true,
        classes: '',
      }
    },

    {
      key : 4,
      element_type: Experience,
      prps : {
        job_title: 'jobtitle1',
        company: 'company1',
        location: 'location1',
        timeframe: 'timeframe1',
        classes: ''
      }
    },

    {
      key : 5,
      element_type: Experience_desc,
      prps : {
        bulleted: true,
        list_len: 3,
        list_content: ['first item', 'second item', 'third item'],
        classes: ''
      }
    }

]

const Elements = () => {
    return (
    <div className='elements'>
      {elements.map( (element) => (<element.element_type prps={element.prps}/>) )}
    </div>
  )
}

export default Elements