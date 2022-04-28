import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();
  return (
    <div className="header">
      <p className="logo=app">MERN Blog</p>
      <p className="menu-item" onClick={() => history('/login')}>Logout</p>
    </div>
  );
};

export default Header;
