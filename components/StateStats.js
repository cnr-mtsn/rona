import React, { useState } from "react";
import useStats from "../lib/useStats";
import styled from "styled-components";

const StatGrid = styled.div``;
const StatBlock = styled.div``;

const ButtonStyle = styled.button`
  border: none;
  background: transparent;
  margin: 30px 0 30px 0;
`;

const StateStats = ({ url }) => {
  const { stats, loading, error } = useStats(url);
  const mortalityRate = (
    (100 / stats[num].confirmed) *
    stats[num].deaths
  ).toFixed(2);
  let [num, setNum] = useState(0);
  console.log(stats, loading, error);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <StatGrid>
        <h3>
          State: <span>{stats[num].provinceState}</span>
        </h3>
        <StatBlock>
          <h3>
            Confirmed: <span>{stats[num].confirmed}</span>
          </h3>
        </StatBlock>
        <StatBlock>
          <h3>
            Recovered: <span>{stats[num].recovered}</span>
          </h3>
        </StatBlock>
        <StatBlock>
          <h3>
            Deaths: <span>{stats[num].deaths}</span>
          </h3>
        </StatBlock>
        <StatBlock>
          <h3>
            Active: <span>{stats[num].active}</span>
          </h3>
        </StatBlock>
        <StatBlock>
          <h3>
            Mortality Rate: <span>{mortalityRate}%</span>
          </h3>
        </StatBlock>
        <ButtonStyle>
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
        </ButtonStyle>
      </StatGrid>
    </>
  );
};

export default StateStats;
