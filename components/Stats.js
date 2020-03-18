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
    <div>
      <div>
        <h4>
          Confirmed: <span>{stats.confirmed.value}</span>
        </h4>
      </div>
      <div>
        <h4>
          Recovered: <span>{stats.recovered.value}</span>
        </h4>
      </div>
      <div>
        <h4>
          Deaths: <span>{stats.deaths.value}</span>
        </h4>
      </div>
      <div>
        <h4>
          Mortality Rate: <span>{mortalityRate}%</span>
        </h4>
      </div>
    </div>
  );
};

export default Stats;
