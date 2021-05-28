import React from "react";

import Hero from "./components/Hero";
import Eficiencia from "./components/Eficiencia";
import Solidez from "./components/Solidez";
import Rapido from "./components/Rapido";

function Home() {
  return (
    <div>
      <Hero id="heroSection" />
      <Eficiencia id="eficienciaSection" />
      <Solidez id="solidezSection" />
      <Rapido id="rapidoSection" />
    </div>
  );
}

export default Home;
