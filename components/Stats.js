import React from "react";
import useStats from "../lib/useStats";
import styled from "styled-components";

const StatGrid = styled.div``;
const StatBlock = styled.div``;

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
    <StatGrid>
      <StatBlock>
        <h4>
          Confirmed: <span>{stats.confirmed.value}</span>
        </h4>
      </StatBlock>
      <StatBlock>
        <h4>
          Recovered: <span>{stats.recovered.value}</span>
        </h4>
      </StatBlock>
      <StatBlock>
        <h4>
          Deaths: <span>{stats.deaths.value}</span>
        </h4>
      </StatBlock>
      <StatBlock>
        <h4>
          Mortality Rate: <span>{mortalityRate}%</span>
        </h4>
      </StatBlock>
    </StatGrid>
  );
};

export default Stats;
