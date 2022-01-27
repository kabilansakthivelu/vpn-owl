import React, {useState, useEffect} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import './Header.css';

const Header = () => {

const [isMobileView, setIsMobileView] = useState(false);

const [isMenuOpen, setIsMenuOpen] = useState(false);

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

const showMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
}

let navLinks;

navLinks = (isMobileView ? (isMenuOpen ? "navLinksMobile" : "") : "navLinksDesktop");

  return (
  <>
  <div className="header">
  <h1 className="logo">VPN Owl</h1>
  <div onClick={showMenu} className="hamburgerMenuIcon">
  {isMobileView && (isMenuOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>)}
  </div>
  </div>
  <nav className={navLinks}>
  <a href="#">About</a>
  <a href="#">Features</a>
  <a href="#">Gallery</a>
  <a href="#">Reviews</a>
  <a href="#">Contact</a>
  </nav>
  </>
  );
};

export default Header;