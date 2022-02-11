import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedin") === '1')
  }, [currentUser]);


  const nav = <>
    <nav className="navigation navigation__desktop">
      <section className="navigation__block navigation__block_desktop">
        <Link
          className="navigation__link"
          to="/movies"
        >
          Фильмы
        </Link>
        <Link
          className="navigation__link"
          to="/saved-movies"
        >
          Сохранённые фильмы
        </Link>
      </section>

      <Link to='/profile'>
        <button
          className="navigation__button navigation__button_profile"
          type="button"
        >
          Аккаунт
        </button>
      </Link>
    </nav>

    <nav className="navigation navigation__mobile">

      <section className="navigation__block">
        <div
          className="navigation__mobile-menu-open"
          onClick={ () => setIsOpen(true)}
        > </div>
      </section>

      {isOpen &&
      <div className="navigation__mobile-menu-container">
        <section className="navigation__mobile-block">
          <button
            className="navigation__mobile-menu-close"
            type="button"
            onClick={ () => setIsOpen(false)}
          >
          </button>

          <div className="navigation__menu">
            <Link
              className="navigation__link navigation__link_mobile"
              to="/"
            >
              Главная
            </Link>

            <Link
              className="navigation__link navigation__link_mobile"
              to="movies"
            >
              Фильмы
            </Link>

            <Link
              className="navigation__link navigation__link_mobile"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>

            <Link to='/profile'>
            <button
              className="navigation__button navigation__button_profile navigation__button_center"

              type="button"
            >
              Аккаунт
            </button>
            </Link>
          </div>

        </section>
      </div>
      }
    </nav>
  </>

  const loginNav = <nav className="navigation">
    <section className="navigation__block">
      <Link
              className="navigation__link"
              to='/signup'
            >
      Регистрация
      </Link>
      <Link to='/signin'>
        <button
          className="navigation__button navigation__button_blue"
          type="button"
        >
          Войти
        </button>
      </Link>
    </section>
  </nav>

  return (
    <>
      {isLoggedIn ? nav : loginNav}
    </>
  )
}

export default Navigation;
