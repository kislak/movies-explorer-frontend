import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import mainApi from "../../utils/MainApi";

function Movies(props) {
  const DEFULAT_ROWS_NUMBER = 2
  const SHORT_DURATION = 40

  const [loading, setLoading] = React.useState(false)
  const [isSearchTriggered, setIsSearchTriggered] = React.useState(false)
  const [filteredMovies, setFilteredMovies] = React.useState([])
  const [rows, setRows] = React.useState(DEFULAT_ROWS_NUMBER)
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    const moviesWithRefs = props.movies.map((movie) => {
      let userMovie = props.userMovies.find((userMovie) => userMovie.movieId == movie.id)
      movie.main_id = (userMovie && userMovie._id)
      return movie
    })

    setMovies(moviesWithRefs);
  }, [props.movies, props.userMovies])

  const getFliteredMovies = (text, shortFlag) => {
    if (!isSearchTriggered) {
      return []
    }

    return movies.filter((item) => {
      if (shortFlag && item.duration > SHORT_DURATION) {
        return false
      }
      return (
        (item.nameRU && item.nameRU.toUpperCase().includes(text.toUpperCase())) ||
        (item.nameEN && item.nameEN.toUpperCase().includes(text.toUpperCase()))
      )
    })
  }

  const searchHandler = (text, shortFlag) => {
    setLoading(true)
    setIsSearchTriggered(true)
    setFilteredMovies(getFliteredMovies(text, shortFlag))
    setRows(DEFULAT_ROWS_NUMBER)

    setLoading(false)
  }

  const saveHandler = (item) => {
    console.log(item)

    mainApi.createMovie(item).then((res) => {
      console.log(res)
      item.main_id = res._id

      setFilteredMovies(filteredMovies.map(old => old.id === item.id ? item : old))
    }).catch((err) => {
      console.log(err);
    })
  }

  const deleteHandler = (item) => {
    mainApi.deleteMovie(item.main_id).then((res) => {
      console.log(res)
      item.main_id = undefined;
      setFilteredMovies(filteredMovies.map(i => i.id === item.id ? item : i))
    }).catch((err) => {
      console.log(err);
    })
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
