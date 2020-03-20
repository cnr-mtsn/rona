import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        fontSize: "1.5rem",
        bottom: "0",
        position: "fixed",
        height: "6vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        background: "black",
      }}
    >
      <a
        style={{
          color: "lightgrey",
          fontWeight: "lighter",
          textDecoration: "none",
        }}
        href='https://github.com/cnr-mtsn/rona'
      >
        <code>&lt;cnr_mtsn/&gt;</code>
      </a>
    </footer>
  );
};

export default Footer;
