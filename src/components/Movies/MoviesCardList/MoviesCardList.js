import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  let movies = props.movies

  if (!props.showAll) {
    const slice = (window.innerWidth < 1280) ? 2 : 3
    movies = movies.slice(0, slice)
  }

  const cards = movies.map((item) => (
    <MoviesCard
      key={item.id}
      title={item.nameRU}
      time={item.duration}
      url={`https://api.nomoreparties.co${item.image.url}`}
      tube={item.trailerLink}
      saved="true"
      showCheck={true}
    />
  ));

  return (
    <section className="movies-card-list">
      <section className="movies-card-list__items">
        { cards.length === 0 &&  <p>Ничего не найдено</p> }
        {cards}
      </section>

      { !props.showAll &&
        <section className="movies-card-list__actions">
          <button type="button" className="movies-card-list__more">
            Ещё
          </button>
        </section>
      }
    </section>
  )
}

export default MoviesCardList;
