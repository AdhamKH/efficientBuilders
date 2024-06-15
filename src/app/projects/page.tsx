import React from "react";
import Projects from "./components/hero";
import { fetcHomehData } from "../lib";

const Page = async () => {
  const { data } = await fetcHomehData();

  return (
    <div>
      <Projects data={data} />
    </div>
  );
};

export default Page;
