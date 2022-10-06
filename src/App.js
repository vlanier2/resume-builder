import Footer from "./components/Footer";
import Header from "./components/Header";
import Editor from "./components/Editor";
import ElementView from "./components/ElementView";

function App() {
  return (
    <div className="App">
      <Header title='Header'/>
        <div className='container'>
            <Editor/>
            <ElementView/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
