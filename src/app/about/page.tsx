import React from "react";
import Hero from "./components/hero";
import BusinessModal from "./components/businessModel";
import { fetcAboutData, fetcAboutEmphasizesData } from "../lib";

const AboutPage = async () => {
  const { data } = await fetcAboutData();
  const { data: emphasizes } = await fetcAboutEmphasizesData();
  return (
    <div>
      <Hero hero={data} />
      <BusinessModal data={emphasizes} />
    </div>
  );
};

export default AboutPage;
