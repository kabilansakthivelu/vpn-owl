import Header from './Components/Header/Header';
import Teaser from './Components/Teaser/Teaser';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import Gallery from './Components/Gallery/Gallery';
import Reviews from './Components/Reviews/Reviews';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
      <Teaser/>
      <About/>
      <Features/>
      <Gallery/>
      <Reviews/>
      </div>
    </div>
  );
}

export default App;
