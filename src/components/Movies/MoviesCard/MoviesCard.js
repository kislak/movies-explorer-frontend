import React from "react";
function MoviesCard(props) {
  return (
    <seciton className="movies-card">
      <img
        className="movies-card__img"
        src={props.url}
      />
      <section className="movies-card__details">
        <p className="movies-card__title">{props.title}</p>
        <p className="movies-card__time">{props.time}</p>
      </section>
    </seciton>
  )
}

export default MoviesCard;
