import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";

function SavedMovies(props) {
  return (
    <div className="saved-movies">
      <Header/>
      <SearchForm/>
      <MoviesCardList/>
      <Footer/>
    </div>
  )
}

export default SavedMovies;
