import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background: #eff1f3;
`;
const Layout = props => {
  return <LayoutStyle>{props.children}</LayoutStyle>;
};

export default Layout;