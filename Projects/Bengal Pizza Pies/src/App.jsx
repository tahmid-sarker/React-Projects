import React from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TopRated from "./sections/TopRated";
import BestSales from "./sections/BestSales";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { DarkModeProvider } from "./components/DarkModeContext";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <TopRated />
        <BestSales />
        <Faq />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;