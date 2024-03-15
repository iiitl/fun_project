import React, { useRef, useEffect } from "react";
import "./App.css";
import bgVideo from "./assets/heroSectionVideo.mp4";
import avtar2 from "./assets/avtar2.mp4";
import metaverse from "./assets/metaverse.mp4";
import crypto from "./assets/‏cryptocurrency.jpg";
import { useAnimation, motion, useInView } from "framer-motion";
import { useNavigate } from "react-router";
import Navbar from "./Navbar.js";

const Home = () => {
  const textVideoRef = useRef(null);
  const lineAppearRef = useRef(null);
  const lineAppearBottomRef = useRef(null);
  const lineAppearMiddleRefs = useRef([]);
  const vdScrollRotateRef = useRef(null);
  const contentContainerRef = useRef(null);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const navigate = useNavigate();

  useEffect(() => {
    const content = document.querySelector(".content");
    content.style.opacity = "1";
    content.style.transform = "translateY(-70px)";
  }, []);

  useEffect(() => {
    if (isInView) {
      const lineAppearBottom = lineAppearBottomRef.current;
      let lineAppear = document.querySelector(".lineAppear");
      lineAppear.style.width = "100%";
      lineAppearBottom.style.width = "100%";
    }
  }, [isInView]);

  return (
    <div>
      <Navbar />
      <video autoPlay muted loop className="bgVideo">
        <source src={bgVideo} type="video/mp4" className="vid" autoplay muted loop />
        Your browser does not support the video tag.
      </video>

      <div className="content" ref={contentContainerRef}>
        <h1 className="welcome">Welcome To The Digital Crypto Art</h1>
        <p className="text_content">
          Lorem ipsum dolor sit amet, an his etiam torquatos
          <br />
          <br />
          neglegentur. Cu mentitum maiestatis persequeris pro,
          <br />
          <br />
        </p>
        <button id="myBtn" onClick={() => navigate("/mentalHealth")}>
          EXPLORE NOW
        </button>
      </div>
      <div className="color">
        <div className="videoContainer">
          <div className="textVideo" ref={textVideoRef}>
            <h2 className="trade">TRADE</h2>
            <h2 className="tradeAsset">
              The virtual destination for digital assets
            </h2>
            <p>
              Buy and sell LAND, Estates, Avatar wearables and names in the
              Decentraland Marketplace: stocking the very best digital goods and
              paraphernalia backed by the Ethereum blockchain.
            </p>
            <button className="browse">START BROWSING</button>
          </div>
          <img src={crypto} className="crypto" />
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
            <h1 className="titleRotate">WORLD</h1>
            <p className="linePara">
              The XR Portal To The Open Metaverse Enabling You To Play, Learn,
              Socialize, Work And Travel To Different Worlds, Making VIVERSE
              Even More Immersive From The Second You Put On Your Headset.
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

            <div className="card">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              neque similique ea commodi natus excepturi sapiente repellat,
              sint, hic numquam voluptate tenetur aspernatur voluptates! Vero
              odit quis ut vel amet?
            </div>
          </div>
          <div className="second a">
            <div
              className="lineAppearMiddle"
              ref={lineAppearMiddleRefs[1]}
            ></div>
            <div className="card">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              neque similique ea commodi natus excepturi sapiente repellat,
              sint, hic numquam voluptate tenetur aspernatur voluptates! Vero
              odit quis ut vel amet?
            </div>
            <div
              className="lineAppearMiddle"
              ref={lineAppearMiddleRefs[2]}
            ></div>
          </div>
          <div className="third a">
            <div className="card">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              neque similique ea commodi natus excepturi sapiente repellat,
              sint, hic numquam voluptate tenetur aspernatur voluptates! Vero
              odit quis ut vel amet?
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
