import React, { useState } from "react";
import useStats from "../lib/useStats";

const StateStats = ({ url }) => {
  const { stats, loading, error } = useStats(url);
  let [num, setNum] = useState(0);
  console.log(stats, loading, error);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <div>
        <h3>
          State: <span>{stats[num].provinceState}</span>
        </h3>
        <div>
          <h3>
            Confirmed: <span>{stats[num].confirmed}</span>
          </h3>
        </div>
        <div>
          <h3>
            Recovered: <span>{stats[num].recovered}</span>
          </h3>
        </div>
        <div>
          <h3>
            Deaths: <span>{stats[num].deaths}</span>
          </h3>
        </div>
        <div>
          <h3>
            Active: <span>{stats[num].active}</span>
          </h3>
        </div>
        <div>
          <button
            onClick={() => {
              num -= 1;
              setNum(num);
            }}
          >
            Last State
          </button>

          <button
            onClick={() => {
              num += 1;
              setNum(num);
            }}
          >
            Next State
          </button>
        </div>
      </div>
    </>
  );
};

export default StateStats;
