import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>

      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>

        <li>
          <Link to="/register">
            <FaSignOutAlt />
            Logout
          </Link>
        </li>

        <li>
          <Link to="/">
            <FaUser />
            User
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
