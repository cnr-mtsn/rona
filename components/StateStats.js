import React, { useState } from "react";
import useStats from "../lib/useStats";

const StateStats = ({ url }) => {
  const { stats, loading, error } = useStats(url);
  let [num, setNum] = useState(0);
  console.log(stats, loading, error);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...</p>;

  return (
    <div
      style={{
        padding: "4vw",
      }}
    >
      <h4
        style={{
          fontSize: "3vh",
          textAlign: "center",
        }}
      >
        {stats[num].provinceState}
      </h4>
      <table
        style={{
          width: "90vw",
          textAlign: "center",
        }}
      >
        <tr
          style={{
            outline: "1px solid black",
            fontSize: "2vh",
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
            Active
          </td>
          <td
            style={{
              borderRight: "1px solid black",
            }}
          >
            Recovered
          </td>
          <td>Deaths</td>
        </tr>
        <tr style={{ fontSize: "2vh" }}>
          <td>{stats[num].confirmed}</td>
          <td>{stats[num].active}</td>
          <td>{stats[num].recovered}</td>
          <td>{stats[num].deaths}</td>
        </tr>
      </table>

      <div
        style={{
          marginTop: "3vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            num -= 1;
            setNum(num);
          }}
          style={{
            border: "1px solid black",
            background: "transparent",
            margin: "1vw",
            borderRadius: "5px",
          }}
        >
          Last State
        </button>
        <button
          onClick={() => {
            num += 1;
            setNum(num);
          }}
          style={{
            border: "1px solid black",
            background: "transparent",
            margin: "1vw",
            borderRadius: "5px",
          }}
        >
          Next State
        </button>
      </div>
    </div>
  );
};

export default StateStats;
