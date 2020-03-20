import React, { useState } from "react";
import useStats from "../lib/useStats";
import StateBlock from "./StateBlock";

const StateStats = ({ url }) => {
  const { stats, loading, error } = useStats(url);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...</p>;

  console.log(stats);

  return (
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
      {stats.map(state => (
        <StateBlock state={state} />
      ))}
    </div>
  );
};

export default StateStats;
