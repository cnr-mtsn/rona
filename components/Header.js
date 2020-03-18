import React from "react";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Header = props => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        background: "rgb(21, 22, 21)",
        background:
          "linear-gradient(90deg, rgba(21, 22, 21, 1) 0%, rgba(137, 69, 187, 1) 100%)",
        color: "white",
      }}
    >
      <h1>Corona Virus Stats</h1>
      <Link href='/'>
        <h3>WorldWide Stats</h3>
      </Link>
      <Link href='/countries'>
        <h3>Stats by Country</h3>
      </Link>
      <Link href='/states'>
        <h3>Stats by State</h3>
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
