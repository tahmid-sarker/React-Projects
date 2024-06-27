import React from "react";
import { useDarkMode } from "../components/DarkModeContext";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <section
        className={`${
          darkMode ? "dark bg-gray-900" : "light bg-black"
        } w-full h-fit lg:px-20 px-10 py-10 flex flex-col justify-center items-center gap-6`}
      >
        <h1 className="text-orange-500 font-bold text-5xl italic">
          Bengal Pizza Pies
        </h1>
        <p className="text-xl text-slate-100 text-center">
        For more update don't forget to follow us on our social media!
        </p>
        <div
          id="social-icons"
          className="flex justify-center items-center gap-4"
        >
          <div
            id="icon-box"
            className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaFacebook className="w-[25px] h-[25px]" />
          </div>
          <div
            id="icon-box"
            className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaInstagram className="w-[25px] h-[25px]" />
            </div>
          <div
            id="icon-box"
            className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaTwitter className="w-[25px] h-[25px]" />
            </div>
          <div
            id="icon-box"
            className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaYoutube className="w-[25px] h-[25px]" />
            </div>
        </div>
        <p className="text-white mt-8">
        &copy; {new Date().getFullYear()}{" "}
            <a href="https://tahmid-sarker.github.io" className="hover:underline text-orange-500 hover:text-white">
              Md. Tahmid Sarker Mahi</a>. All Rights Reserved.
        </p>
      </section>

      {/* darkmode toggle button */}
      <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:bottom-6 left-6 bottom-6"
        >
          {darkMode ? (
            <FaMoon size={30} className="text-black" />
          ) : (
            <FaSun size={30} className="text-black" />
          )}
        </button>
      </div>

      {/* scroll to top button */}

      <div id="icon-box" className="bg-orange-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6">
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
