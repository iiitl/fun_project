import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import bgVideo from "./assets/checkimg.mp4";
import avtar2 from "./assets/avtar2.mp4";
import metaverse from "./assets/metaverse.mp4";
import crypto from "./assets/ZWxvcXVlbnQgY29kZWNyYWZ0.jpg";
import check_image from "./assets/check_image.jpg";
import { useAnimation, motion, useInView } from "framer-motion";
import { useNavigate } from "react-router";
import Navbar from "./Navbar.js";

const Home = ({ setProtect }) => {
  const textVideoRef = useRef(null);
  const lineAppearRef = useRef(null);
  const lineAppearBottomRef = useRef(null);
  const lineAppearMiddleRefs = useRef([]);
  const vdScrollRotateRef = useRef(null);
  const contentContainerRef = useRef(null);
  const ref = useRef(null);
  const inpRef = useRef(null);
  const [val, setVal] = useState(false);

  const isInView = useInView(ref, { once: false });
  const navigate = useNavigate();

  useEffect(() => {
    if (val) {
      const content = document.querySelector(".content");
      content.style.opacity = "1";
      content.style.transform = "translateY(-70px)";
    }
    setTimeout(() => {
      setVal(true);
    }, 1000);
  }, [val]);

  function handleSubmit(e) {
    e.preventDefault();
    if (inpRef.current.value === "eloquent codecraft") {
      setProtect(true);
      navigate("/wrong");
    }
  }

  useEffect(() => {
    if (isInView) {
      const lineAppearBottom = lineAppearBottomRef.current;
      let lineAppear = document.querySelector(".lineAppear");
      let lineAppearMiddles = document.querySelectorAll(".lineAppearMiddle");
      lineAppearMiddles.forEach((item) => {
        item.style.height = "87%";
      });
      lineAppear.style.width = "100%";
      lineAppearBottom.style.width = "100%";
    }
  }, [isInView]);

  return (
    <div>
      <Navbar />
      {val ? (
        <div style={{ zIndex: "10" }}>
          <div style={{ display: "flex", width: "100vw" }}>
            <div style={{ display: "flex", width: "100vw" }}>
              <video autoPlay muted loop className="bgVideo">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <h1 style={{ color: "white", width: "100px" }}>hello</h1> */}
            </div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                style={{ width: "100px", height: "30px" }}
                ref={inpRef}
              />
            </form>
          </div>
          <div className="content" ref={contentContainerRef}>
            <h1 className="welcome">
              Cipher Hunt <br />
            </h1>
            <p className="text_content">
              Delve into hidden places, uncover the secrets beyond surface As
              you venture into hidden places and uncover the hidden secrets
              remember this the message can be anywhere
            </p>
            <button id="myBtn">EXPLORE NOW
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg_class">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            color: "white",
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Loading... this might take a while check your network</h1>
        </div>
      )}

      <div className="color">
        <div className="videoContainer">
          <div className="textVideo" ref={textVideoRef}>
            <div
              style={{
                position: "relative",
                display: "flex",
                height: "55px",
                marginBottom: "70px",
              }}
            >
              {/* <h2
                style={{ color: "red", position: "absolute" }}
                id="answer is out of visibiltity"
                className="trade"
              >
                Hidden Anywhere
              </h2>{" "} */}
              <h2 className="trade" style={{ zIndex: "10" }}>
                Hidden Anywhere
              </h2>
            </div>
            <h2 className="tradeAsset">Lorem ipsum dolor sit</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              officia labore voluptatum, voluptas modi culpa sapiente fugiat sed
              exercitationem distinctio voluptatibus explicabo in unde eveniet
              ut, ipsum commodi ea voluptates!
            </p>
            <button className="browse">Explore</button>
          </div>
          <img src={crypto} className="crypto" />
          <img
            src={check_image}
            className="crypto"
            style={{ display: "none" }}
          />
        </div>
        <div className="scrollRotate">
          <div className="vdRotate">
            <div className="vdContainer" ref={vdScrollRotateRef}>
              <video
                autoPlay
                muted
                loop
                id="myVideo"
                className="vdScrollRotate"
                src={metaverse}
              ></video>
            </div>
          </div>
          <div className="contentContainer" ref={contentContainerRef}>
            <h1 className="titleRotate">Find it</h1>
            <p className="linePara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              praesentium, perferendis tempore beatae sed minima sit voluptate
              quos deserunt vero eveniet laboriosam, temporibus, esse veritatis
              voluptatibus ullam soluta obcaecati delectus.
            </p>
            <button className="lineBtn">Explore Now</button>
          </div>
        </div>
      </div>
      <motion.div ref={ref} transition={{ duration: 1 }}>
        <div className="lineContainer" id="lineContainer">
          <div className="lineAppear " ref={lineAppearRef}></div>
          <div className="lineAppearBottom" ref={lineAppearBottomRef}></div>
          <div className="first a">
            <div
              className="lineAppearMiddle"
              ref={lineAppearMiddleRefs[0]}
            ></div>

            <div className="card1">
              Display none, but text can below anything.Discover what lies
              beneath{" "}
            </div>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/something");
              }}
              style={{ color: "black", position: "absolute" }}
            >
              <input placeholder="Enter Appropriate Input" />
            </form>
          </div>
          <div className="second a">
            <div
              className="lineAppearMiddle"
              ref={lineAppearMiddleRefs[1]}
            ></div>
            <div className="card2">
              Display none, but text can below anything.Discover what lies
              beneath
            </div>
            <input
              style={{ color: "white", position: "absolute" }}
              placeholder="Enter Appropriate Input"
            />
            <div
              className="lineAppearMiddle"
              ref={lineAppearMiddleRefs[2]}
            ></div>
          </div>
          <div className="third a">
            <div className="card3">
              Display none, but text can below anything.Discover what lies
              beneath
            </div>
            <div
              style={{ color: "white", position: "absolute" }}
              placeholder="Enter Appropriate Input"
            >
              text
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
