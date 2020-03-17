import React from "react";
import styled from "styled-components";
const MyFooter = styled.footer`
  height: 50px;
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  color: white;
  font-size: 1.1rem;
`;
const Footer = () => {
  return <MyFooter>© 2020 CNR_MTSN || github.com/cnr-mtsn</MyFooter>;
};

export default Footer;
