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
  const [rows, setRows] = React.useState(DEFULAT_ROWS_NUMBER)
  const [filteredMovies, setFilteredMovies] = React.useState([])

  React.useEffect(() => {
    setLoading(false)
  }, [])

  const applyFilter = (text, shortFlag) => {
    setLoading(false)

    const result = props.movies.filter((item) => {
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

  const searchHandler = (text, shortFlag) => {
    setLoading(true)
    setIsSearchTriggered(true)
    setRows(DEFULAT_ROWS_NUMBER)
    applyFilter(text, shortFlag)
  }

  const saveHandler = (item) => {
    mainApi.createMovie(item).then((res) => {
      item.main_id = res._id

      // setSavedMovies(moviesWithRefs)
      let result = filteredMovies.map((i) => {
        return (i.id === item.id) ? item : i
      })

      setFilteredMovies(result)
    }).catch((err) => {
      console.log(err);
    })
  }

  const deleteHandler = (item) => {
    mainApi.deleteMovie(item.main_id).then((res) => {
      console.log(res)
      item.main_id = undefined;

      let result = filteredMovies.map((i) => {
        if (i.id === item.id){
          i.main_id = null;
          return i;
        } else {
          return i
        }
      })
      setFilteredMovies(result)
    }).catch((err) => {
      console.log(err);
    })
  }

  // const saveHandler = (item) => {
  //   props.saveHandler(item)
  //
  // }

  // const deleteHandler = (item) => {
  //   props.deleteHandler(item)
  // }

  return (
    <div className="movies">
      <Header/>
      <SearchForm
        searchHandler={searchHandler}
      />
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
