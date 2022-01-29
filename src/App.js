import {useRef, useState} from 'react';
import Header from './Components/Header/Header';
import Teaser from './Components/Teaser/Teaser';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import Gallery from './Components/Gallery/Gallery';
import Reviews from './Components/Reviews/Reviews';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {

  const [hexCodeEntered, setHexCodeEntered] = useState("#FFFFFF");

  const hexRefPara = useRef();
  const hexRefInput = useRef();
  const bgColor = useRef();

  //On hovering the floating button, it will change to 'input' element

  const enterHexCode = () =>{
    hexRefPara.current.style.display = "none";
    hexRefInput.current.style.display = "block";
    hexRefInput.current.focus();
  }

  //Changing background color

  const changeColor = (e) =>{
    setHexCodeEntered(e.target.value);
    bgColor.current.style.backgroundColor = e.target.value;
  }

  //On leaving the floating button, it will change back to 'p' element

  const returnToHexPara = () =>{
    hexRefPara.current.style.display = "block";
    hexRefInput.current.style.display = "none";
  }

  return (
    <div className="App" ref={bgColor}>
      <Header/>
      <div className="content">

      {/* Greeting Banner */}

      <div className="hexBox" onMouseEnter={enterHexCode} onMouseLeave={returnToHexPara}>
      <input ref={hexRefInput} type="text" maxLength="7" className="hexInput" value={hexCodeEntered} onChange={(e)=>{changeColor(e)}}/>
      <p ref={hexRefPara} className="hexCode">{hexCodeEntered || "#FFFFFF"}</p>
      </div>
      
      <Teaser/>
      <About/>
      <Features/>
      <Gallery/>
      <Reviews/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
