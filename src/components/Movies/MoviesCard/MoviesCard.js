import React from "react";
function MoviesCard(props) {
  const item = props.item
  const time = () => {
    if (item.duration){
      const duration_h = Math.floor(item.duration / 60);
      const duration_m = item.duration % 60.0;
      return `${duration_h}ч ${duration_m}м`
    }
  }

  return (
    <section className="movies-card">
      <section className="movies-card__picture" >
        <img onClick={()=> window.open(item.trailerLink, "_blank")}
          className="movies-card__img"
          alt="постер фильма"
          src={`https://api.nomoreparties.co${item.image.url}`}
          >
        </img>

        {!item.main_id &&
        <button className="movies-card__button movies-card__button_save"
          onClick={ ()=>{props.saveHandler(item)} }
          type="button"
        >
          Сохранить
        </button>
        }

        {item.main_id && props.savedMovies &&
        <button className="movies-card__button movies-card__button_delete"
          type="button"
          onClick={ ()=>{props.deleteHandler(item)} }
        >
        </button>
        }

        {item.main_id && !props.savedMovies &&
        <button className="movies-card__button movies-card__button_check"
          type="button"
          onClick={ ()=>{props.deleteHandler(item)} }
        >
        </button>
        }


      </section>
      <section className="movies-card__details">
        <p className="movies-card__title">{item.nameRU}</p>
        <p className="movies-card__time">{time()}</p>
      </section>
    </section>
  )
}

export default MoviesCard;
