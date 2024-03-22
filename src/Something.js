import React, { useEffect } from "react";

const Something = () => {
  useEffect(() => {
    localStorage.setItem(
      "secrets are secret",
      "In the depths lies a message awaiting your discovery"
    );
    localStorage.setItem("Found???", "Can it be Here????");
    sessionStorage.setItem("Find it", "Where Can it be?");
  }, []);
  return <div style={{ color: "white" }}>Whats That In your Storage</div>;
};

export default Something;
