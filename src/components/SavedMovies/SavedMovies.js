import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  const DEFULAT_ROWS_NUMBER = 2
  const [rows, setRows] = React.useState(DEFULAT_ROWS_NUMBER)
  const [isSearchTriggered, setIsSearchTriggered] = React.useState(false)

  const searchHandler = (text, shortFlag) => {
    setIsSearchTriggered(true)
    setRows(DEFULAT_ROWS_NUMBER)
    props.searchSavedHandler(text, shortFlag)
  }

  const deleteHandler = (item) => {
    props.deleteHandler(item)
  }

  return (
    <div className="movies saved-movies">
      <Header/>
      <SearchForm
        searchHandler={searchHandler}
        allowEmpty={true}
      />
      <MoviesCardList
        movies={props.savedFilteredMovies }
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
