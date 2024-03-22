import React, { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);

  return (
    <>
      <nav ref={navRef} className="nav">
        <a href="#" className="logo">
          Cipher Hunt
        </a>
        <div className="navbar" style={{ marginLeft: "-160px" }}>
          <a href="/random">Home</a>
          <a href="/lol">About</a>
          {/* <a href="#">Portfolio</a>
          <a href="#">Service</a>
          <a href="#">Contact</a> */}
        </div>
        <div className="join">
          <a href="/login">Login</a>
          <a href="/signup">Sign up</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
