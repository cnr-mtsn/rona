import React from "react";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Header = props => {
  return (
    <header
      style={{
        margin: "0",
        padding: "0",
        fontSize: "4vw",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "8vh",
        width: "100%",
        borderBottom: "2px solid black",
      }}
    >
      <Link href='/'>
        <h3 style={{ cursor: "pointer" }}>World</h3>
      </Link>
      <Link href='/countries'>
        <h3 style={{ cursor: "pointer" }}>Countries</h3>
      </Link>
      <Link href='/states'>
        <h3 style={{ cursor: "pointer" }}>States</h3>
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
        <FaGithub size={24} />
      </a>
    </header>
  );
};

export default Header;
