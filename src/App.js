import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Wrong from "./Wrong";
import Something from "./Something";

const App = () => {
  const [protect, setProtect] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home setProtect={setProtect} />} />
        <Route
          path="/random"
          element={
            <h1 style={{ color: "white" }}>random text why not look around</h1>
          }
        />
        <Route
          path="/something"
          element={
            <Something />
          }
        />
        <Route path="/lol" element={<h1 style={{ color: "white" }}>lol</h1>} />
        <Route
          path="/login"
          element={<h1 style={{ color: "white" }}>Login</h1>}
        />
        <Route
          path="/signup"
          element={<h1 style={{ color: "white" }}>Signup</h1>}
        />
        {protect && <Route path="/wrong" element={<Wrong />} />}
        <Route
          path="*"
          element={<h1 style={{ color: "white" }}>Page Not Found</h1>}
        />
      </Routes>
    </>
  );
};

export default App;
