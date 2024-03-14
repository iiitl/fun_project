import React, { useEffect, useRef } from "react";
import { Link } from 'react-scroll';
import { useState } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    {/* <div className="hi"> */}
    <nav ref={navRef} className={`navbar ${isScrolled ? 'blur' : 'nav'}`}>
        <a href="#" className="logo">
          CryptoArtVerse
        </a>
        <div className="navbar" style={{ marginLeft: "-160px" }}>
          <a href="#">Home</a>
          <a href="#lineContainer">About</a>
          {/* <a href="#">Portfolio</a>
          <a href="#">Service</a>
          <a href="#">Contact</a> */}
        </div>
        <div className="join">
          <a href="#">Login</a>
          <a href="#">Sign up</a>
        </div>
      </nav>
    {/* </div> */}
      
    </>
  );
};

export default Navbar;
