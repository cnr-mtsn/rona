import React from "react";
import useStats from "../lib/useStats";
import styled from "styled-components";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

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
        <h4>Confirmed: </h4>
        <span>{stats.confirmed.value}</span>
      </StatBlock>
      <StatBlock>
        <h4>Recovered: </h4>
        <span>{stats.recovered.value}</span>
      </StatBlock>
      <StatBlock>
        <h4>Deaths: </h4>
        <span>{stats.deaths.value}</span>
      </StatBlock>
      <StatBlock>
        <h4>Mortality Rate: </h4>
        <span>{mortalityRate}%</span>
      </StatBlock>
    </StatGrid>
  );
};

export default Stats;
