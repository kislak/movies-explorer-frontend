import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies(props) {
  const [loading, setLoading] = React.useState(false)
  const [isSearchTriggered, setIsSearchTriggered] = React.useState(false)
  const [filteredMovies, setFilteredMovies] = React.useState([])

  const getFliteredMovies = (text, shortFlag) => {
    let movies = props.fetchMovies()

    return movies.filter((item) => {
      if (shortFlag && item.duration > 40) {
        return false
      }
      return (item.nameRU && item.nameRU.includes(text)) || (item.nameEN && item.nameEN.includes(text))
    })
  }

  const searchHandler = (text, shortFlag) => {
    setLoading(true)

    setFilteredMovies(getFliteredMovies(text, shortFlag))

    setIsSearchTriggered(true)
    setLoading(false)
  }


  return (
    <div className="movies">
      <Header/>
      <SearchForm searchHandler={searchHandler} />
      {!loading &&
        <MoviesCardList movies={filteredMovies} showAll={false} isSearchTriggered={isSearchTriggered}/>
      }
      {loading &&
        <Preloader/>
      }
      <Footer/>
    </div>
  )
}

export default Movies;
