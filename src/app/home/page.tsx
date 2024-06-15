import React from "react";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Installation from "./components/installation";
import DistributedPower from "./components/distributedPower";
import StandOut from "./components/standOut";
import OurProjects from "./components/ourProjects";
import CountingNumbers from "./components/countingNumbers";
import Services from "./components/services";
import Benefits from "./components/benefits";
import { fetcHomeIntro, fetcHomehData, fetcHomehSlider } from "../lib";

const HomePage = async () => {
  const response = await fetcHomehData();
  const sliders = await fetcHomehSlider();
  // const distibutedPower = await fetcHomeIntro();
  console.log("response", response);

  return (
    <div>
      <Installation data={sliders} />
      <DistributedPower data={response} />
      <StandOut data={response} />
      {/* <OurProjects /> */}
      <CountingNumbers data={response} />
      <Services data={response} />
      <Benefits data={response} />
    </div>
  );
};

export default HomePage;
