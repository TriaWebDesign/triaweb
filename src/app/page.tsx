import Image from "next/image";
import Hero from "./__components/Hero";
import Services from "./__components/Services";
import Process from "./__components/Process";
import Projects from "./__components/Projects";
import About from "./__components/About";
import Clients from "./__components/Clients";
import WhatsTria from "./__components/WhatsTria";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Services />
      <WhatsTria />
      <Process />
      <Projects />
      <About />
      <Clients />
    </main>
  );
}
