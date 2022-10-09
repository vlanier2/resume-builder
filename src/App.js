import Footer from "./components/Footer";
import Header from "./components/Header";
import Editor from "./components/Editor";
import ElementView from "./components/ElementView";

//Resume Elements
import Name from './components/resumeElements/Name'
import Name_header from './components/resumeElements/Name_header'
import Section_category from './components/resumeElements/Section_category'
import Experience from './components/resumeElements/Experience'
import Experience_desc from './components/resumeElements/Experience_desc'

// HOOK CALLED USESTATE
import { useState } from 'react'

function App() {

 // Name of state and function to update state - default passed in useState - note State is immuteable
 const [elements, setElements] = useState([
  {
    element_type: Name,
    element_name: 'Name',
    prps : {
      text: 'Vincent Lanier',
      classes: '',
      key : 1
    }
  },

  {
    element_type: Name_header,
    element_name: 'Name Header',
    prps : {
      list_len: 4,
      list_content: ['ONE', 'TWO', 'THREE', 'FOUR'],
      classes: '',
      key : 2
    }
  },

  {
    element_type: Section_category,
    element_name: 'Section Category',
    prps: {
      text: 'SECTION 1',
      underline: true,
      classes: '',
      key : 3
    }
  },

  {
    element_type: Experience,
    element_name: 'Experience',
    prps : {
      job_title: 'jobtitle1',
      company: 'company1',
      location: 'location1',
      timeframe: 'timeframe1',
      classes: '',
      key : 4
    }
  },

  {
    element_type: Experience_desc,
    element_name: 'Experience Description',
    prps : {
      bulleted: true,
      list_len: 3,
      list_content: ['first item', 'second item', 'third item'],
      classes: '',
      key : 5
    }
  }
])

  return (
    <div className="App">
      <Header title='Header'/>
        <div className='container'>
          <Editor elements={elements}/>
          <ElementView elements={elements}/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
