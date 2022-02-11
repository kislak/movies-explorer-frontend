import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <Link
        className="header__logo"
        to='/'
      />
      {!props.logoOnly && <Navigation/> }
    </header>
  )
}

export default Header;
