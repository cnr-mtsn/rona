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
      © 2020{" "}
      <a href='http://github.com/cnr-mtsn/rona' alt='link to repo'>
        CNR_MTSN
      </a>
    </footer>
  );
};

export default Footer;
