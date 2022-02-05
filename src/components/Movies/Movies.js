import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies(props) {
  const DEFULAT_ROWS_NUMBER = 2
  const SHORT_DURATION = 40

  const [loading, setLoading] = React.useState(false)
  const [isSearchTriggered, setIsSearchTriggered] = React.useState(false)
  const [filteredMovies, setFilteredMovies] = React.useState([])
  const [rows, setRows] = React.useState(DEFULAT_ROWS_NUMBER)

  const getFliteredMovies = (text, shortFlag) => {
    let movies = props.fetchMovies()

    return movies.filter((item) => {
      if (shortFlag && item.duration > SHORT_DURATION) {
        return false
      }
      return (item.nameRU && item.nameRU.includes(text)) || (item.nameEN && item.nameEN.includes(text))
    })
  }

  const searchHandler = (text, shortFlag) => {
    setLoading(true)

    setFilteredMovies(getFliteredMovies(text, shortFlag))
    setRows(DEFULAT_ROWS_NUMBER)

    setIsSearchTriggered(true)
    setLoading(false)
  }


  return (
    <div className="movies">
      <Header/>
      <SearchForm searchHandler={searchHandler} />
      {!loading &&
        <MoviesCardList
          movies={filteredMovies}
          showAll={false}
          isSearchTriggered={isSearchTriggered}
          rows={rows}
          setRows={setRows}
        />
      }
      {loading &&
        <Preloader/>
      }
      <Footer/>
    </div>
  )
}

export default Movies;
