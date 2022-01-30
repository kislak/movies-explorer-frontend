import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies(props) {
  return (
    <div className="movies">
      <Header/>
      <SearchForm/>
      <MoviesCardList showMore={true}/>
      <Preloader/>
      <Footer/>
    </div>
  )
}

export default Movies;
