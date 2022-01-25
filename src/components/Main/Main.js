import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";

function Main(props) {
  return (
    <div className="main">
      <Header/>
      <Promo />
      <AboutProject/>
      <Techs/>
      <Footer/>
    </div>
  )
}

export default Main;
