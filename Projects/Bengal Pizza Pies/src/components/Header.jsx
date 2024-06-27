import React, { useState, useEffect } from 'react';
import { useDarkMode } from "../components/DarkModeContext";
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { Link } from "react-scroll";
import { auth, googleProvider } from '../firebase/firebase';
import { onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';
import Login from './Login';
import Signup from './Signup';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const toggleLoginPopup = () => {
    if (showSignupPopup) setShowSignupPopup(false);
    setShowLoginPopup(!showLoginPopup);
  }

  const toggleSignupPopup = () => {
    if (showLoginPopup) setShowLoginPopup(false);
    setShowSignupPopup(!showSignupPopup);
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out: ", error);
      alert("Error logging out: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setShowLoginPopup(false);
      setShowSignupPopup(false);
    } catch (error) {
      console.error("Error with Google login: ", error);
      alert("Error with Google login: " + error.message);
    }
  };

  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Pizza', path: 'pizza' },
    { link: 'Faq', path: 'faq' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <nav className={`${darkMode ? "dark bg-gray-800" : "light bg-black"} w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-6 sticky top-0 z-50`}>
      <h1 className="text-orange-500 font-bold lg:text-5xl text-3xl italic">Bengal Pizza Pies</h1>
      <ul className="lg:flex justify-center items-center gap-10 hidden">
        {navItems.map(({ link, path }) => (
          <Link key={path} className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 dark:hover:text-black hover:text-white" to={path} spy={true} offset={-100} smooth={true}>
            {link}
          </Link>
        ))}
      </ul>

      <div id="header-icons" className="lg:flex hidden justify-center items-center gap-8 text-white relative">
        <FaSearch className="w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />
        <IoPerson className="w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />
        <FaHeart className="w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />
        <div className="relative">
          <FaShoppingCart className="w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />
          <div className="bg-orange-500 dark:bg-white dark:text-black px-3 py-1 text-white rounded-full absolute -top-[28px] -right-[20px] text-sm font-bold">
            2
          </div>
        </div>
        {user ? (
          <button onClick={handleLogout} className="bg-orange-500 text-white uppercase font-semibold cursor-pointer py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">Logout</button>
        ) : (
          <button onClick={toggleLoginPopup} className="bg-orange-500 text-white uppercase font-semibold cursor-pointer py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">Login/Sign Up</button>
        )}
      </div>

      <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className="text-white text-3xl cursor-pointer" /> : <FaBars className="text-white text-3xl cursor-pointer" />}
        </div>
      </div>

      <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col items-center w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link key={path} className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-white w-full text-center" to={path} spy={true} offset={-100} smooth={true}>
              {link}
            </Link>
          ))}
        </ul>
        {user ? (
          <button onClick={handleLogout} className="bg-orange-500 text-white uppercase font-semibold cursor-pointer py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">Logout</button>
        ) : (
          <button onClick={toggleLoginPopup} className="bg-orange-500 text-white uppercase font-semibold cursor-pointer py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">Login/Sign Up</button>
        )}
      </div>

      {showLoginPopup && <Login handleGoogleLogin={handleGoogleLogin} setShowLoginPopup={setShowLoginPopup} toggleSignupPopup={toggleSignupPopup} />}
      {showSignupPopup && <Signup handleGoogleLogin={handleGoogleLogin} setShowSignupPopup={setShowSignupPopup} toggleLoginPopup={toggleLoginPopup} />}
    </nav>
  );
};

export default Header;
