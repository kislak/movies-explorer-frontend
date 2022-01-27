import React from "react";

import { useNavigate } from "react-router-dom/index";

function Navigation(props) {
  const navigate = useNavigate();
  return (
    <nav className="navigation">
      <section className="navigation__block navigation__block_large">
        <a
          className="navigation__link"
          onClick={() => navigate('/movies') }
        >
          Фильмы
        </a>
        <a
          className="navigation__link"
          onClick={() => navigate('/saved-movies') }
        >
          Сохранённые фильмы
        </a>
      </section>

      <section className="navigation__block">
        <a
          className="navigation__link"
          onClick={() => navigate('/signup') }
        >
          Регистрация
        </a>
        <button
          className="navigation__button navigation__button_blue"
          onClick={() => navigate('/signin') }
          type="button"
        >
          Войти
        </button>
        <button
          className="navigation__button navigation__button_profile"
          onClick={() => navigate('/profile') }
          type="button"
        >
          Аккаунт
        </button>
      </section>
    </nav>
  )
}

export default Navigation;
