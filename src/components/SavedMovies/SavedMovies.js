import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import mainApi from "../../utils/MainApi";

function SavedMovies(props) {
  const SHORT_DURATION = 40
  const [filteredMovies, setFilteredMovies] = React.useState([])
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    const moviesWithRefs = props.movies.map((movie) => {
      let userMovie = props.userMovies.find((userMovie) => userMovie.movieId == movie.id)
      movie.main_id = (userMovie && userMovie._id)
      return movie
    }).filter((movie) => { return movie.main_id  })

    setMovies(moviesWithRefs);
    setFilteredMovies(moviesWithRefs)
  }, [props.movies, props.userMovies])

  const getFliteredMovies = (text, shortFlag) => {
    return movies.filter((item) => {
      if (shortFlag && item.duration > SHORT_DURATION) {
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
  }

  const searchHandler = (text, shortFlag) => {
    setFilteredMovies(getFliteredMovies(text, shortFlag))
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
    <div className="movies saved-movies">
      <Header/>
      <SearchForm searchHandler={searchHandler} />
      <MoviesCardList
        movies={filteredMovies}
        showAll={true}
        isSearchTriggered={true}
        deleteHandler={deleteHandler}
      />
      <Footer/>
    </div>
  )
}

export default SavedMovies;
