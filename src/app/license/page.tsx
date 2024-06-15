import React from "react";
import Hero from "./components/hero";
import InsuranceInfo from "./components/insuranceInfo";
import { fetcHomehData } from "../lib";

const License = async () => {
  const { data } = await fetcHomehData();
  return (
    <div>
      <Hero data={data} />
      <InsuranceInfo data={data} />
    </div>
  );
};

export default License;
