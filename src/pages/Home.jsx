import React from "react";
import Navbar from "../layouts/Navbar";
import AGHero from "../sections/HeroSection";
import AboutPage from "../sections/AboutSection";

const Home = () => {
  return (
    <div className="min-h-screen pb-[100vh]">
      <Navbar />
      <main>
        <AGHero />
        <AboutPage id="about" />
        {/* <Services id="services" /> */}
      </main>
    </div>
  );
};

export default Home;
