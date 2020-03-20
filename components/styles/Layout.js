import React from "react";

const Layout = props => {
  return (
    <div
      style={{
        background: "rgb(126,241,142)",
        background:
          "linear-gradient(90deg, rgba(126,241,142,1) 0%, rgba(0,255,246,1) 100%)",
        backgroundSize: "cover",
        minHeight: "100vh",
        margin: "-10px",
        padding: "0",
      }}
    >
      {props.children}
    </div>
  );
};

export default Layout;
