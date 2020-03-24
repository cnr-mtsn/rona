import React, { useState } from "react";
import useStats from "../lib/useStats";
import StateBlock from "./StateBlock";

const StateStats = ({ url }) => {
  const { stats, loading, error } = useStats(url);

  const [selectedState, setSelectedState] = useState("Missouri");

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...</p>;

  let states = [];
  for (let i = 0; i < stats.length; i++) {
    if (states.indexOf(stats[i].provinceState) === -1) {
      states.push(stats[i].provinceState);
    }
    states.sort();
  }

  console.log(states.length);

  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "5vh",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            margin: "0 2vw 0 0",
            fontSize: "3vh",
          }}
        >
          Select a state:
        </span>
        <select
          style={{
            width: "20vw",
            border: "1px solid black",
            background: "transparent",
            boxShadow: "2px 2px grey",
            fontSize: "20px",
          }}
          onChange={e => {
            setSelectedState(e.target.value);
          }}
        >
          {states.map(state => (
            <option value={state} key={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5vh",
        }}
      >
        <p
          style={{
            fontSize: "3vh",
          }}
        >
          Now viewing counties in:{" "}
          <span style={{ fontWeight: "bold", fontSize: "4vh" }}>
            {selectedState.toUpperCase()}
          </span>
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "2rem",
          margin: "5vh 0 5vh 0",
          padding: "1rem",
          justifyItems: "center",
          overflowY: "scroll",
        }}
      >
        {stats.map(state =>
          state.provinceState === selectedState ? (
            <StateBlock state={state} />
          ) : null,
        )}
      </div>
    </>
  );
};

export default StateStats;
