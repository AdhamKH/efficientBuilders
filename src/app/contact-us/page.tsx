import React from "react";
import Hero from "./component/hero";
import { fetcHomehData } from "../lib";

const page = async () => {
  const { data } = await fetcHomehData();

  return (
    <div>
      <Hero data={data} />
    </div>
  );
};

export default page;
