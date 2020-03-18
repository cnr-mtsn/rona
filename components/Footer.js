import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        height: "50px",
        width: "100%",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: "0",
        color: "white",
        fontSize: "1.1rem",
      }}
    >
      <a
        style={{
          margin: "0 auto",
          color: "white",
          textDecoration: "none",
        }}
        href='http://github.com/cnr-mtsn/rona'
        alt='link to repo'
      >
        © 2020 CNR_MTSN
      </a>
    </footer>
  );
};

export default Footer;
