import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies(props) {
  const [loading, setLoading] = React.useState(false)

  const searchHandler = (text, shortFlag) => {
    setLoading(true)

    props.fetchMovies()

    setLoading(false)

    console.log(text)
    console.log(shortFlag)
  }


  return (
    <div className="movies">
      <Header/>
      <SearchForm searchHandler={searchHandler} />
      {!loading &&
        <MoviesCardList movies={props.movies} showMore={true}/>
      }
      {loading &&
        <Preloader/>
      }
      <Footer/>
    </div>
  )
}

export default Movies;
