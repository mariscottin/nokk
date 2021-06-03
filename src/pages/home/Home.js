import React from "react";

import Hero from "./components/Hero";
import Eficiencia from "./components/Eficiencia";
import Solidez from "./components/Solidez";
import Rapido from "./components/Rapido";
import Sustentable from "./components/Sustentable";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Hero id="heroSection" />
      <Eficiencia id="eficienciaSection" />
      <Solidez id="solidezSection" />
      <Rapido id="rapidoSection" />
      <Sustentable id="sustentableSection" />
      <Footer />
    </div>
  );
}

export default Home;
