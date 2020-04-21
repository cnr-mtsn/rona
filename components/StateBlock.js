import React from "react";
import formatNumber from "../lib/formatNumber";

const StateBlock = ({ state }) => {
  console.log(state);
  return (
    <div
      style={{
        width: "40vw",
        height: "35vh",
        border: "1px solid black",
        borderRadius: "10%",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          margin: "1vh 0 0 0",
          fontSize: "1.25rem",
          height: "3vh",
        }}
      >
        {state.combinedKey.substring(0, state.combinedKey.indexOf(","))}
      </h3>
      <div
        style={{
          height: "1vh",
          borderTop: "1px solid black",
          width: "40vw",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "25vh",
        }}
      >
        <p style={{ fontSize: "1.2rem" }}>
          Confirmed: <span>{formatNumber(state.confirmed)}</span>
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Active: <span>{formatNumber(state.active)}</span>
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Recovered:
          <span>
            {formatNumber(state.confirmed - state.deaths - state.active)}
          </span>
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Deaths: <span>{formatNumber(state.deaths)}</span>
        </p>
      </div>
    </div>
  );
};

export default StateBlock;
