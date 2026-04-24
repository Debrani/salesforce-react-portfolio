import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Certifications from "../components/sections/Certifications";
import DownloadResume from "../components/sections/downloadresume";
import Blogs from "../components/sections/Blogs";
import SalesforceDashboard from "../components/sections/SalesforceDashboard";
import ParticleBackground from "../components/ParticleBackground";
import AgentWidget from "../components/AgentWidget";
export default function Home() {
  return (
    <React.Fragment>
      <div className="relative min-h-screen overflow-hidden" style={{ color: "#000000" }}>
        <ParticleBackground />
        <NavBar />
        <main className="relative z-10 flex flex-col items-center">
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <DownloadResume/>
          <Blogs />
          <SalesforceDashboard />
          <AgentWidget />
          
        </main>
      </div>
      <div className="relative min-h-screen overflow-hidden" style={{ color: "#cbd5e1", background: "#05060f" }}></div>
    </React.Fragment>
  );
}