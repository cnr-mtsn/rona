import React from "react";
import useStats from "../lib/useStats";

const Stats = ({ url }) => {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...</p>;

  const mortalityRate = (
    (100 / stats.confirmed.value) *
    stats.deaths.value
  ).toFixed(2);

  return (
    <div
      style={{
        padding: "4vw",
      }}
    >
      <table
        style={{
          width: "90vw",
          textAlign: "center",
        }}
      >
        <tr
          style={{
            outline: "1px solid black",
          }}
        >
          <td
            style={{
              borderRight: "1px solid black",
            }}
          >
            Confirmed
          </td>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          >
            Recovered
          </td>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          >
            Deaths
          </td>
          <td>Mortality</td>
        </tr>
        <tr>
          <td>{stats.confirmed.value}</td>
          <td>{stats.recovered.value}</td>
          <td>{stats.deaths.value}</td>
          <td>{mortalityRate}%</td>
        </tr>
      </table>
    </div>
  );
};

export default Stats;
