import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  let movies = props.movies
  const showNumber = () => {
    const moviesInRow = ((window.innerWidth < 1280) ? 2 : 3)
    return props.rows * moviesInRow
  }

  const isAllShown = () => {
    return showNumber() >= movies.length
  }

  const moviesToShow = () => {
    return isAllShown() ? movies : movies.slice(0, showNumber())
  }

  const cards = moviesToShow().map((item) => (
    <MoviesCard
      key={item.id}
      item={item}
      // title={item.nameRU}
      // time={item.duration}
      // url={`https://api.nomoreparties.co${item.image.url}`}
      // saved={true}
      // showCheck={true}
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

      { !props.showAll && !isAllShown() &&
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
