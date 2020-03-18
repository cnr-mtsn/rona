import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        height: "50px",
        width: "100%",
        background: "black",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position: "fixed",
        bottom: "0",
        color: "white",
        fontSize: "1.1rem",
      }}
    >
      © 2020 CNR_MTSN || github.com/cnr-mtsn
    </footer>
  );
};

export default Footer;
