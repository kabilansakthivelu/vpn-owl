import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import './Header.css';

const Header = () => {

const [isMobileView, setIsMobileView] = useState(false);

const [isMenuOpen, setIsMenuOpen] = useState(false);

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

const showMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
}

let navLinks;

navLinks = isMobileView ? (isMenuOpen ? "navLinksMobile" : "navLinksHide") : "";

const menuClose = () =>{
  setIsMenuOpen(false);
}

  return (
  <>
  <div className="header">
  <Link to="teaser" offset={-67} smooth={true} className="logo">VPN Owl</Link>
  <div onClick={showMenu} className="hamburgerMenuIcon">
  {isMobileView && (isMenuOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>)}
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
