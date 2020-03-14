import React, { useState } from "react";
import useStats from "../lib/useStats";
import styled from "styled-components";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

const StateStats = ({ url }) => {
  const { stats, loading, error } = useStats(url);
  let [num, setNum] = useState(0);
  console.log(stats, loading, error);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
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
      <StatGrid>
        <StatBlock>
          <h3>State: </h3>
          <span>{stats[num].provinceState}</span>
        </StatBlock>
        <StatBlock>
          <h3>Confirmed: </h3>
          <span>{stats[num].confirmed}</span>
        </StatBlock>
        <StatBlock>
          <h3>Recovered: </h3>
          <span>{stats[num].recovered}</span>
        </StatBlock>
        <StatBlock>
          <h3>Deaths: </h3>
          <span>{stats[num].deaths}</span>
        </StatBlock>
        <StatBlock>
          <h3>Active: </h3>
          <span>{stats[num].active}</span>
        </StatBlock>
      </StatGrid>
    </>
  );
};

export default StateStats;
