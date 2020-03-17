import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const MyHeader = styled.nav`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
  padding: 1rem;
  border-bottom: 4px solid slategray;
  background: rgb(21, 22, 21);
  background: linear-gradient(
    90deg,
    rgba(21, 22, 21, 1) 0%,
    rgba(137, 69, 187, 1) 100%
  );
  color: white;
  h3,
  span {
    cursor: pointer;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
  }
  h3:hover {
    font-size: 24px;
  }
  span {
    justify-content: flex-start;
    margin-left: 20px;
  }
`;

const Header = props => {
  return (
    <MyHeader>
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
      <Link href='https://www.github.com/cnr-mtsn/rona'>
        <span>
          <FaGithub size={32} />
        </span>
      </Link>
    </MyHeader>
  );
};

export default Header;
