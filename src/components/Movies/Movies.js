import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <div className="movies">
      <Header/>
      <SearchForm/>
      <MoviesCardList/>
      <Preloader/>
      <Footer/>
    </div>
  )
}

export default Movies;
