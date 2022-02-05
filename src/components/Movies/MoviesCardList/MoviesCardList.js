import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  let movies = props.movies
  const showNumber = () => {
    const moviesInRow = ((window.innerWidth < 1280) ? 2 : 3)
    return props.rows * moviesInRow
  }

  const areAllShown = () => {
    return showNumber() >= movies.length
  }

  const moviesToShow = () => {
    if (props.showAll) {
      return movies
    }

    return areAllShown() ? movies : movies.slice(0, showNumber())
  }

  const cards = moviesToShow().map((item) => (
    <MoviesCard
      key={item.id}
      item={item}
      saveHandler={props.saveHandler}
      deleteHandler={props.deleteHandler}
    />
  ));

  const nothingFound = () => {
    return props.isSearchTriggered && (movies.length === 0)
  }

  const moreHandler = () => {
    props.setRows((rows) => { return rows + 1});
  }

  return (
    <section className="movies-card-list">
      <section className="movies-card-list__items">
        { nothingFound() && <p>Ничего не найдено</p> }
        {cards}
      </section>

      { !props.showAll && !areAllShown() &&
        <section className="movies-card-list__actions">
          <button
            type="button"
            className="movies-card-list__more"
            onClick={moreHandler}>
            Ещё
          </button>
        </section>
      }
    </section>
  )
}

export default MoviesCardList;
