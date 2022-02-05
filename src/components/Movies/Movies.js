import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies(props) {
  const DEFULAT_ROWS_NUMBER = 2

  const [loading, setLoading] = React.useState(false)
  const [isSearchTriggered, setIsSearchTriggered] = React.useState(false)
  const [rows, setRows] = React.useState(DEFULAT_ROWS_NUMBER)

  React.useEffect(() => {
    setLoading(false)
  }, [props.filteredMovies])

  const searchHandler = (text, shortFlag) => {
    setLoading(true)
    setIsSearchTriggered(true)
    setRows(DEFULAT_ROWS_NUMBER)
    props.searchHandler(text, shortFlag)
  }

  const saveHandler = (item) => {
    props.saveHandler(item)
  }

  const deleteHandler = (item) => {
    props.deleteHandler(item)
  }

  return (
    <div className="movies">
      <Header/>
      <SearchForm searchHandler={searchHandler} />
      {!loading &&
        <MoviesCardList
          movies={props.filteredMovies}
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
