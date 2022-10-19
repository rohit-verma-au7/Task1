import React from "react";
import "./header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerContentContainer">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>

        <div className="listContainer">
          <button>Home</button>
          <button>2021</button>
          <button>About</button>
          <button>Benefits</button>
          <button>Categories</button>
          <button>Voting</button>
          <button>Contact</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
