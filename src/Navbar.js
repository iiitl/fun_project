import React, { useEffect, useRef } from "react";
import './Navbar.css'
const Navbar = () => {
  const navRef = useRef(null);

  return (
    <>
      <nav ref={navRef} className="nav">
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
