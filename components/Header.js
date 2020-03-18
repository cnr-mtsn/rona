import React from "react";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Header = props => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "rgb(126,241,142)",
        background:
          "linear-gradient(90deg, rgba(126,241,142,1) 0%, rgba(0,255,246,1) 100%)",
      }}
    >
      <h1>Corona Virus Stats</h1>
      <div style={{ width: "30vw" }}></div>
      <Link href='/'>
        <h3 style={{ cursor: "pointer" }}>WorldWide Stats</h3>
      </Link>
      <Link href='/countries'>
        <h3 style={{ cursor: "pointer" }}>Stats by Country</h3>
      </Link>
      <Link href='/states'>
        <h3 style={{ cursor: "pointer" }}>Stats by State</h3>
      </Link>
      <a
        href='https://www.github.com/cnr-mtsn/rona'
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "20px",
          color: "black",
          alignItems: "center",
        }}
      >
        <FaGithub size={32} />
      </a>
    </header>
  );
};

export default Header;
