import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = ({ onLinkClick }) => {
  return (
    <div className="relative text-black">
      <Link
        to="/login"
        onClick={onLinkClick}
        className="flex items-center space-x-2 text-white hover:text-lightGray"
      >
        <FaUserCircle className="text-3xl" />
      </Link>
    </div>
  );
};

export default Profile;
