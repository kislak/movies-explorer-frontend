import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies(props) {
  const movies = props.movies

  const searchHandler = (text, shortFlag) => {
    console.log(text)
    console.log(shortFlag)
  }


  return (
    <div className="movies">
      <Header/>
      <SearchForm searchHandler={searchHandler} />
      <MoviesCardList movies={movies} showMore={true}/>
      <Preloader/>
      <Footer/>
    </div>
  )
}

export default Movies;
