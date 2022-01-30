import React from "react";

import { useNavigate, useLocation } from "react-router-dom/index";

function Navigation(props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const loggedin = ["/movies", "/saved-movies"].includes(pathname)

  return (
    <>
      {loggedin &&
        <nav className="navigation">
          <section className="navigation__block">
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
      }
      {!loggedin &&
        <nav className="navigation navigation__register">
          <section className="navigation__block ">
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
      }
    </>
  )
}

export default Navigation;
