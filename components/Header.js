import React from "react";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Header = props => {
  return (
    <header
      style={{
        margin: "0",
        padding: "0",
        fontSize: "1.2rem",
        display: "flex",
        top: "0",
        position: "sticky",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "10vh",
        width: "100%",
        borderBottom: "2px solid black",
        background: "rgb(126,241,142)",
        background:
          "linear-gradient(90deg, rgba(126,241,142,1) 0%, rgba(0,255,246,1) 100%)",
      }}
    >
      <Link href='/'>
        <h2
          style={{
            cursor: "pointer",
            height: "100%",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          World
        </h2>
      </Link>
      <span style={{ border: "1px solid black", height: "60%" }}></span>
      <Link href='/usa'>
        <h2 style={{ cursor: "pointer" }}>USA</h2>
      </Link>
      <span style={{ border: "1px solid black", height: "60%" }}></span>
      <Link href='/states'>
        <h2 style={{ cursor: "pointer" }}>County/State</h2>
      </Link>
      <span style={{ border: "1px solid black", height: "60%" }}></span>
      <a
        href='https://www.github.com/cnr-mtsn/rona'
        style={{
          display: "flex",
          justifyContent: "flex-start",
          color: "black",
          alignItems: "center",
        }}
      >
        <FaGithub size={40} />
      </a>
    </header>
  );
};

export default Header;
