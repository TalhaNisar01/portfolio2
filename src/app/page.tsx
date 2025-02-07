import React from "react";
import About from './components/About';
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from './components/Skill';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Hero
 from "./components/Hero";
 
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
