import React from "react";

import { useNavigate } from "react-router-dom/index";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div
        className="header__logo"
        onClick={() => navigate('/')}
      />
      {!props.logoOnly && <Navigation/> }
    </header>
  )
}

export default Header;
