import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  const searchHandler = (text, shortFlag) => {
    props.fetchMovies(text, shortFlag)
  }

  return (
    <div className="movies saved-movies">
      <Header/>
      <SearchForm searchHandler={searchHandler} />
      <MoviesCardList movies={props.movies} showAll={true}/>
      <Footer/>
    </div>
  )
}

export default SavedMovies;
