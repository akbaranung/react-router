import React from "react";

const Footer = () => {
  return (
    <div style={footer}>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;

const footer = {
  display: "flex",
  color: "white",
  justifyContent: "center",
  background: "#fe024e",
  position: "absolute",
  alignItems: "center",
  bottom: "0",
  width: "100%",
};
