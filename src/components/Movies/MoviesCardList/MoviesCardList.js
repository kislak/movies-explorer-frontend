import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  const slice =  ((window.innerWidth < 1280) ? 2 : 3)
  const movies = props.movies.slice(0, slice)

  console.log(movies)
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

      { props.showMore &&
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
