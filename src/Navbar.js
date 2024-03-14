import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const navRef = useRef(null);
  const [show, setShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (scrollPosition >= 15) {
      // if scroll down hide the navbar
      setShow(true);
    } else {
      // if scroll up show the navbar
      setShow(false);
    }
    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position)

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav ref={navRef} className={`nav ${show && "onScroll"}`}>
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
    </>
  );
};

export default Navbar;
