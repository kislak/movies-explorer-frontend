import React from "react";

import { useNavigate, useLocation } from "react-router-dom/index";

function Navigation(props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const loggedin = ["/movies", "/saved-movies"].includes(pathname)

  const nav = <>
    <nav className="navigation navigation__desktop">
      <section className="navigation__block navigation__block_desktop">
        <a
          className="navigation__link"
          onClick={() => navigate('/movies')}
        >
          Фильмы
        </a>
        <a
          className="navigation__link"
          onClick={() => navigate('/saved-movies')}
        >
          Сохранённые фильмы
        </a>
      </section>
      <button
        className="navigation__button navigation__button_profile"
        onClick={() => navigate('/profile')}
        type="button"
      >
        Аккаунт
      </button>
    </nav>

    <nav className="navigation navigation__mobile">
      <section className="navigation__block">
        <div className="navigation__mobile-menu-open"> </div>
      </section>

      <div className="navigation__mobile-menu-container">
        <section className="navigation__mobile-block">
          <button
            className="navigation__mobile-menu-close"
            type="button"
          >
          </button>

          <div className="navigation__menu">
            <a
              className="navigation__link"
              onClick={() => navigate('/')}
            >
              Главная
            </a>

            <a
              className="navigation__link"
              onClick={() => navigate('/movies')}
            >
              Фильмы
            </a>

            <a
              className="navigation__link"
              onClick={() => navigate('/saved-movies')}
            >
              Сохранённые фильмы
            </a>

            <button
              className="navigation__button navigation__button_profile navigation__button_center"
              onClick={() => navigate('/profile')}
              type="button"
            >
              Аккаунт
            </button>
          </div>

        </section>
      </div>
    </nav>
  </>

  const loginNav = <nav className="navigation">
    <section className="navigation__block">
      <a
              className="navigation__link"
              onClick={() => navigate('/signup')}
            >
      Регистрация
      </a>
      <button
        className="navigation__button navigation__button_blue"
        onClick={() => navigate('/signin')}
        type="button"
      >
        Войти
      </button>
    </section>
  </nav>

  return (
    <>
      {loggedin ? nav : loginNav}
    </>
  )
}

export default Navigation;
