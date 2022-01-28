import Header from './Components/Header/Header';
import Teaser from './Components/Teaser/Teaser';
import About from './Components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
      <Teaser/>
      <About/>
      </div>
    </div>
  );
}

export default App;
