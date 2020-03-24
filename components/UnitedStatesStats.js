import React from "react";
import useStats from "../lib/useStats";
import formatNumber from "../lib/formatNumber";

const UnitedStatesStats = ({ url }) => {
  const { stats, loading, error } = useStats(url);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...</p>;

  const mortalityRate = (
    (100 / stats.confirmed.value) *
    stats.deaths.value
  ).toFixed(2);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "5vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          height: "15vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Confirmed</h1>
        <h2>{formatNumber(stats.confirmed.value)}</h2>
        <div
          style={{
            height: ".5px",
            borderTop: "1px solid black",
            width: "50%",
            margin: "0 25vw 0 25vw",
          }}
        ></div>
      </div>

      <div
        style={{
          textAlign: "center",
          height: "15vh",

          width: "100vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Recovered</h1>
        <h2>{formatNumber(stats.recovered.value)}</h2>
        <div
          style={{
            height: ".5px",
            borderTop: "1px solid black",
            width: "50%",
            margin: "0 25vw 0 25vw",
          }}
        ></div>
      </div>

      <div
        style={{
          textAlign: "center",
          height: "15vh",

          width: "100vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Deaths</h1>
        <h2>{formatNumber(stats.deaths.value)}</h2>
        <div
          style={{
            height: ".5px",
            borderTop: "1px solid black",
            width: "50%",
            margin: "0 25vw 0 25vw",
          }}
        ></div>
      </div>

      <div
        style={{
          textAlign: "center",
          height: "15vh",

          width: "100vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Mortality</h1>
        <h2>{mortalityRate}%</h2>
      </div>
    </div>
  );
};

export default Stats;
