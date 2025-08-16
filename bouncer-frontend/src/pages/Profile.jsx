import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = ({ onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownLinkClick = () => {
    setIsOpen(false);
    if (onLinkClick) onLinkClick(); 
  };

  const handleAuthAction = () => {
    setIsLoggedIn((prev) => !prev);
    handleDropdownLinkClick();
  };

  return (
    <div ref={dropdownRef} className="relative text-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-lightGray"
      >
        <FaUserCircle className="text-3xl" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-4 w-44 md:w-32 bg-white rounded-lg shadow-lg z-50">
          {isLoggedIn ? (
            <button
              onClick={handleAuthAction}
              className="w-full text-left px-4 py-2 hover:text-lightGray"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              onClick={handleDropdownLinkClick}
              className="block px-4 py-2 hover:text-lightGray"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
