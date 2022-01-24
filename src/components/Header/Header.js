import React from "react";

import { useNavigate } from "react-router-dom/index";


function Header(props) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <section className="header__nav">
        <div
          className="header__logo"
          onClick={() => navigate('/')}
        >
        </div>
        <a
          className="header__link"
          onClick={() => navigate('/movies') }
        >
          Фильмы
        </a>
        <a
          className="header__link"
          onClick={() => navigate('/saved-movies') }
        >
          Сохранённые фильмы
        </a>
      </section>

      <section className="header__nav">
        <a
          className="header__link"
          onClick={() => navigate('/signup') }
        >
          Регистрация
        </a>
        <button
          className="header__button header__button_blue"
          onClick={() => navigate('/signin') }
          type="button"
        >
          Войти
        </button>
        <button
          className="header__button header__button_profile"
          onClick={() => navigate('/profile') }
          type="button"
        >
          Аккаунт
        </button>
      </section>
    </header>
  )
}

export default Header;
