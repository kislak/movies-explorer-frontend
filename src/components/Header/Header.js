import React from "react";

import { useNavigate } from "react-router-dom/index";


function Header(props) {
  const navigate = useNavigate();
  return (
    <div>
      <header className="header">
        <div className="header__nav">
          <div className="header__logo">
          </div>
          <div className="header__link" onClick={() => navigate('/movies') }>
            Фильмы
          </div>
          <div className="header__link" onClick={() => navigate('/saved-movies') }>
            Сохранённые фильмы
          </div>
        </div>

        <div className="header__nav">
          <div className="header__link" onClick={() => navigate('/signup') }>
            Регистрация
          </div>
          <div className="header__link" onClick={() => navigate('/signin') }>
            Войти
          </div>
          <div className="header__link" onClick={() => navigate('/profile') }>
            Аккаунт
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
