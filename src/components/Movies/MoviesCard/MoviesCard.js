import React from "react";
function MoviesCard(props) {
  return (
    <section className="movies-card">
      <section className="movies-card__picture" >
        <img onClick={()=> window.open(props.tube, "_blank")}
          className="movies-card__img"
          alt="постер фильма"
          src={props.url}
          >
        </img>

        {props.showSave &&
        <button className="movies-card__button movies-card__button_save"
          type="button"
        >
          Сохранить
        </button>
        }

        {props.showDelete &&
        <button className="movies-card__button movies-card__button_delete"
          type="button"
        >
        </button>
        }

        {props.showCheck &&
        <button className="movies-card__button movies-card__button_check">
        </button>
        }


      </section>
      <section className="movies-card__details">
        <p className="movies-card__title">{props.title}</p>
        <p className="movies-card__time">{props.time}</p>
      </section>
    </section>
  )
}

export default MoviesCard;
