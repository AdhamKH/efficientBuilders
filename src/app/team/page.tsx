import React from "react";
import Team from "./components/hero";
import { fetcHomehData } from "../lib";

const page = async () => {
  const response = await fetcHomehData();

  return (
    <div>
      <Team data={response} />
    </div>
  );
};

export default page;
