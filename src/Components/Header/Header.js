import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillCloseCircle} from 'react-icons/ai';
import './Header.css';

const Header = () => {

const [isMobileView, setIsMobileView] = useState(false);

const [isMenuOpen, setIsMenuOpen] = useState(false);

const [showBanner, setShowBanner] = useState(true);

// checkSize function for monitoring screen size

const checkSize = () =>{
    if(window.innerWidth < 768){
        setIsMobileView(true);
    }
    else{
        setIsMobileView(false);
    }
}

useEffect(()=>{
    checkSize();
    window.addEventListener("resize", checkSize);
    return(()=>{
        window.removeEventListener("resize", checkSize);
    })
}, [])

  let greetingText;

  let time = new Date().getHours();
  if((time > 4) && (time < 12)){
    greetingText = "Good Morning";
  }
  else if((time >= 12) && (time < 17)){
    greetingText = "Good Afternoon";
  }
  else if((time >= 17) && (time <= 19)){
    greetingText = "Good Evening";
  }
  else{
    greetingText = "Good Night";
  }

useEffect(()=>{
  setTimeout(() => {
    setShowBanner(false);
  }, 10000);
}, [])

const showMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
}

let navLinks;

navLinks = isMobileView ? (isMenuOpen ? "navLinksMobile" : "navLinksHide") : "";

const menuClose = () =>{
  setIsMenuOpen(false);
}

const closeBanner = () =>{
  setShowBanner(false);
}

  return (
  <>
  <div className="header">
  <Link to="teaser" offset={-67} smooth={true} className="logo">VPN Owl</Link>
  {showBanner && 
  <div className="banner">
  <AiFillCloseCircle className="bannerCloseIcon" onClick={closeBanner}/>
  <p className="greetingText">{greetingText}, Guest!</p>
  </div>
  }
  <div onClick={showMenu} className="hamburgerMenuIcon">
  {isMobileView && (isMenuOpen ? <AiFillCloseCircle/> : <GiHamburgerMenu/>)}
  </div>

{/* Navbar menu for Desktop enclosed within Header */}

  <nav className="navLinksDesktop">
  <Link to="about" offset={-67} smooth={true}>About</Link>
  <Link to="features" offset={-67} smooth={true}>Features</Link>
  <Link to="gallery" offset={-67} smooth={true}>Gallery</Link>
  <Link to="reviews" offset={-67} smooth={true}>Reviews</Link>
  <Link to="contact" offset={-67} smooth={true}>Contact</Link>
  </nav>

  </div>

{/* Navbar menu for mobile displayed as hamburger menu*/}

  <nav className={navLinks}>
  <Link to="about" offset={-67} smooth={true} onClick={menuClose}>About</Link>
  <Link to="features" offset={-67} smooth={true} onClick={menuClose}>Features</Link>
  <Link to="gallery" offset={-67} smooth={true} onClick={menuClose}>Gallery</Link>
  <Link to="reviews" offset={-67} smooth={true} onClick={menuClose}>Reviews</Link>
  <Link to="contact" offset={-67} smooth={true} onClick={menuClose}>Contact</Link>
  </nav>
  </>
  );
};

export default Header;
