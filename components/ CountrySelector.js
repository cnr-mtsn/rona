import { useState } from "react";

import useStats from "../lib/useStats";
import Stats from "./Stats";

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries",
  );
  const [selectedCountry, setSelectedCountry] = useState("USA");
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <div style={{ textAlign: "center", margin: "0" }}>
        <h1>Select a Country</h1>
        <select
          style={{
            width: "60vw",
            border: "1px solid black",
            background: "transparent",
            boxShadow: "2px 2px grey",
            fontSize: "20px",
          }}
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
      </div>

      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
