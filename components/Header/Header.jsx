import Logo from "./../../assets/icons/logo.svg";
import exitIcon from "./../../assets/icons/exit.svg";
import hamburgerMenuIcon from "./../../assets/icons/hamburger-menu.svg";
import { NavLink } from "react-router-dom";
import { refreshPage } from "./../../utils/helper.js";
import { useState } from "react";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavLinkClick = () => {
    setSidebarOpen(false);
    // Delay refresh slightly to let route finish
    setTimeout(() => {
      refreshPage();
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-20 text-xs md:h-24 md:text-xl md:px-12 lg:max-w-[80rem] lg:mx-auto lg:px-32 bg-transparent ">
      {/* Logo */}
      <NavLink
        to="/"
        className="flex items-center gap-2 text-black text-2xl p-6 md:p-4 hover:bg-transparent"
        onClick={handleNavLinkClick}
      >
        <img className="w-15" src={Logo} alt="yoga logo" />
        
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent font-bold">
          YOG<span className="text-rose-500">AI</span>
        </span>
      </NavLink>

      <nav>
        {/* Hamburger icon */}
        <button
          className="block md:hidden p-6"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <img src={hamburgerMenuIcon} alt="hamburger menu icon" />
        </button>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 z-50 flex flex-col items-start w-3/4 sm:w-1/2 h-full bg-orange-300 md:static md:bg-transparent md:flex-row md:items-center md:w-auto transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          {/* Close button */}
          <button
            className="block md:hidden p-6 self-end"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <img src={exitIcon} alt="exit icon" />
          </button>

          {/* Navigation links */}
          <div className="flex flex-col md:flex-row md:items-center w-full gap-12 md:gap-8 px-8 py-4">
            <NavLink
              to="/poses"
              className="text-xl md:text-base w-48 md:w-auto"
              onClick={handleNavLinkClick}
            >

              {/* w-auto text-md font-bold text-center py-2 px-4 outline-2 outline-blue-500  rounded-md hover:bg-blue-500 transition */}
              <button className=" h-10 font-semibold bg-transparent
              relative max-md:px-8 px-2 bg-gradient-to-b from-purple-500  to-purple-200  border-2 border-black  overflow-hidden group rounded-full cursor-pointer
              hover:scale-105 duration-300 text-gray-800             ">
                 Learn Yoga
                <span className="absolute inset-0 bg-white opacity-60 blur-sm rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"> 
                 </span>
                  
              </button>
            </NavLink>

            <NavLink
              to="/instructions"
              className="text-xl md:text-base w-48 md:w-auto"
              onClick={handleNavLinkClick}
            >
    <button className=" h-10 font-semibold bg-transparent
              relative max-md:px-8 px-2 bg-gradient-to-b from-rose-600  to-rose-200  border-2 border-black  overflow-hidden group rounded-full cursor-pointer
              hover:scale-105 duration-300 text-gray-800             ">
                 Start Session
                <span className="absolute inset-0 bg-white opacity-60 blur-sm rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"> 
                 </span>
                  
              </button>
            </NavLink>

            <NavLink
                to="/dashboard" 
                className="text-xl md:text-base w-48 md:w-auto"
                onClick={handleNavLinkClick}
              >
                    <button className=" h-10   font-semibold bg-transparent
              relative px-2 max-md:h-15 bg-gradient-to-b from-emerald-400  to-teal-200  border-2 border-black  overflow-hidden group rounded-full cursor-pointer
              hover:scale-105 duration-300 text-gray-800             ">
                 Personal Recomendation
                <span className="absolute inset-0 bg-white opacity-60 blur-sm rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"> 
                 </span>
                  
              </button>
              </NavLink>


               <NavLink
                to="/guide" 
                className="text-xl md:text-base w-48 md:w-auto"
                onClick={handleNavLinkClick}
              >
                   <button className=" h-10 font-semibold bg-transparent
              relative max-md:h-12 px-2 bg-gradient-to-b from-purple-500  to-purple-200  border-2 border-black  overflow-hidden group rounded-full cursor-pointer
              hover:scale-105 duration-300 text-gray-800             ">
                Step Wise Guide
                <span className="absolute inset-0 bg-white opacity-60 blur-sm rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"> 
                 </span>
                  
              </button>
              </NavLink>

              <NavLink
                to="/login" 
                className="text-xl md:text-base w-48 md:w-auto"
                onClick={handleNavLinkClick}
              >
                   <button className=" h-10 font-semibold bg-transparent
              relative max-md:px-8 px-2 bg-gradient-to-b from-purple-500  to-purple-200  border-2 border-black  overflow-hidden group rounded-full cursor-pointer
              hover:scale-105 duration-300 text-gray-800             ">
                 Login
                <span className="absolute inset-0 bg-white opacity-60 blur-sm rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"> 
                 </span>
                  
              </button>
              </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
