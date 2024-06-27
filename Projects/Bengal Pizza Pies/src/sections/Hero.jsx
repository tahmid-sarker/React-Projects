import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroImage from "../assets/images/banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <section
      id="hero"
      className="w-full lg:px-20 px-10 lg:py-20 py-10 h-[600px] bg-cover bg-center flex flex-col justify-center items-start gap-8"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1 data-aos="zoom-in" className="text-6xl text-white font-bold">
        Life is combination <br /> of Pizza & Magic
      </h1>
      <p data-aos="zoom-in" className="text-xl text-white font-lg">
       Order your favorite pizza now and get <br /> it delivered in 30 minutes. Enjoy Halal <br /> ingredients and fast delivery.
      </p>
      <button
        data-aos="flip-up"
        className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black"
      >
        ORDER NOW
      </button>
    </section>
  );
};

export default Hero;