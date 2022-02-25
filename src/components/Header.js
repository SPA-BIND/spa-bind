import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";

const MenuItem = ({ active, children, to }) => (
  <div className="menu-item">{children}</div>
);

const Header = () => {
  return (
    <div>
      <div className="menu">
        <MenuItem>Shop</MenuItem>
        <MenuItem>LookBook</MenuItem>
        <MenuItem>Event</MenuItem>
        <MenuItem>Login</MenuItem>
        <MenuItem>Mypage</MenuItem>
        <FaSearch />
      </div>
    </div>
  );
};

export default Header;