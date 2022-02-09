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
  const [rows, setRows] = React.useState(DEFULAT_ROWS_NUMBER)
  const [movies, setMovies] = React.useState([])
  const [filteredMovies, setFilteredMovies] = React.useState([])

  React.useEffect(() => {
    const moviesWithRefs = props.movies.map((movie) => {
      let userMovie = props.userMovies.find((userMovie) => userMovie.movieId === movie.id)
      movie.main_id = (userMovie && userMovie._id)
      return movie
    })
    setMovies(moviesWithRefs)

    if (moviesWithRefs.length) {
      const shortFlag = localStorage.getItem('movieSearchShortFlag')
      const text = localStorage.getItem('movieSearchText')

      const result = moviesWithRefs.filter((item) => {
        if (shortFlag && item.duration > SHORT_DURATION) {
          return false
        }
        return (
          (item.nameRU && item.nameRU.toUpperCase().includes(text.toUpperCase())) ||
          (item.nameEN && item.nameEN.toUpperCase().includes(text.toUpperCase()))
        )
      })

      setFilteredMovies(result)
    }
  }, [props.userMovies, props.movies])


  const applyFilter = (text, shortFlag) => {
    const result = movies.filter((item) => {
      if (shortFlag && item.duration > SHORT_DURATION) {
        return false
      }
      return (
        (item.nameRU && item.nameRU.toUpperCase().includes(text.toUpperCase())) ||
        (item.nameEN && item.nameEN.toUpperCase().includes(text.toUpperCase()))
      )
    })

    setLoading(false)
    setFilteredMovies(result)
  }

  const searchHandler = (text, shortFlag) => {
    setLoading(true)
    setIsSearchTriggered(true)
    setRows(DEFULAT_ROWS_NUMBER)

    localStorage.setItem('movieSearchText', text)
    localStorage.setItem('movieSearchShortFlag', shortFlag)

    applyFilter(text, shortFlag)
  }

  const deleteHandler = (item) => {
    props.deleteHandler(item)
  }

  const saveHandler = (item) => {
    props.saveHandler(item)
  }

  return (
    <div className="movies">
      <Header/>
      <SearchForm
        key="moviesSF"
        searchHandler={searchHandler}
        text={localStorage.getItem('movieSearchText')}
        short={localStorage.getItem('movieSearchShortFlag')}
      />
      {!loading &&
        <MoviesCardList
          key="moviesMCL"
          movies={filteredMovies}
          isSearchTriggered={isSearchTriggered}
          rows={rows}
          setRows={setRows}
          saveHandler={saveHandler}
          deleteHandler={deleteHandler}
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
