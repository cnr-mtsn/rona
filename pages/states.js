import React from "react";
import StateStats from "../components/StateStats";

const states = () => {
  return (
    <StateStats url='https://covid19.mathdro.id/api/countries/USA/confirmed' />
  );
};

export default states;
