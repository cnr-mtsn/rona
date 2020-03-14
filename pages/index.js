import React from "react";
import Layout from "../components/styles/Layout";
import Stats from "../components/Stats";
import CountrySelector from "../components/ CountrySelector";

const index = () => {
  return (
    <Layout>
      <Stats url='https://covid19.mathdro.id/api' />
      <CountrySelector />
    </Layout>
  );
};

export default index;
