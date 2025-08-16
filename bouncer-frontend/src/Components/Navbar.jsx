import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logoimg from "../assets/LOGO.jpg";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-black text-white w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logoimg}
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
          />
        </Link>

        {/* Desktop Profile */}
        <div className="hidden md:flex items-center space-x-4">
          <Profile />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
      <div className="px-5 py-4 flex items-center justify-between border-b border-lightGray ">
          <img src={Logoimg} alt="Logo" className="w-10 h-10 rounded-full" />
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col mt-4 px-6">
          <li>
            <Profile onClick={() => setMenuOpen(false)} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
