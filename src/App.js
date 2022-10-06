import Footer from "./components/Footer";
import Header from "./components/Header";
import Viewer from "./components/Viewer";
import Elements from "./components/ElementView";

function App() {
  return (
    <div className="App">
      <Header title='Header'/>
        <div className='container'>
            <Elements/>
            <Viewer/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
