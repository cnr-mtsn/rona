import { useState } from "react";
import styled from "styled-components";
import useStats from "../lib/useStats";
import Stats from "./Stats";

const CountrySelectorStyle = styled.div``;

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries",
  );
  const [selectedCountry, setSelectedCountry] = useState("USA");
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <CountrySelectorStyle>
        <h4>Select a Country</h4>
        <select
          onChange={e => {
            setSelectedCountry(e.target.value);
          }}
        >
          {Object.entries(countries.countries).map(([country, code]) => (
            <option
              selected={selectedCountry === countries.iso3[code]}
              key={code}
              value={countries.iso3[code]}
            >
              {country}
            </option>
          ))}
        </select>
      </CountrySelectorStyle>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </>
  );
}