import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  const DEFULAT_ROWS_NUMBER = 2
  const SHORT_DURATION = 40
  const [rows, setRows] = React.useState(DEFULAT_ROWS_NUMBER)
  const [isSearchTriggered, setIsSearchTriggered] = React.useState(false)
  const [movies, setMovies] = React.useState([])
  const [filteredMovies, setFilteredMovies] = React.useState([])

  const [text, setText] = React.useState()
  const [short, setShort] = React.useState(false)

  React.useEffect(() => {
    const moviesWithRefs = props.movies.map((movie) => {
      let userMovie = props.userMovies.find((userMovie) => userMovie.movieId === movie.id)
      movie.main_id = (userMovie && userMovie._id)
      return movie
    }).filter(movie => movie.main_id )

    setMovies(moviesWithRefs)
    searchSavedHandler(text, short)
  }, [props.userMovies])

  const searchSavedHandler = (text, short) => {
    setIsSearchTriggered(true)
    setRows(DEFULAT_ROWS_NUMBER)
    setText(text)
    setShort(short)

    const result =  movies.filter((item) => {
      if (short && item.duration > SHORT_DURATION) {
        return false
      }

      if (!text) {
        return true
      }

      return (
        (item.nameRU && item.nameRU.toUpperCase().includes(text.toUpperCase())) ||
        (item.nameEN && item.nameEN.toUpperCase().includes(text.toUpperCase()))
      )
    })

    setFilteredMovies(result)
  }

  const deleteHandler = (item) => {
    props.deleteHandler(item)
  }

  return (
    <div className="movies saved-movies">
      <Header/>
      <SearchForm
        searchHandler={searchSavedHandler}
        allowEmpty={true}
      />
      <MoviesCardList
        movies={filteredMovies}
        showAll={true}
        isSearchTriggered={isSearchTriggered}
        deleteHandler={deleteHandler}
        rows={rows}
        setRows={setRows}
      />
      <Footer/>
    </div>
  )
}

export default SavedMovies;
