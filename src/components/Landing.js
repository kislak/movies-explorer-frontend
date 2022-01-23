import React from "react";

import { useNavigate } from "react-router-dom";


function Landing(props) {
  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <div className="header__logo">
        </div>
        <div className="header__nav">
          <div className="header__link" onClick={() => navigate('register') }>
            Регистрация
          </div>
          <div className="header__link" onClick={() => navigate('login') }>
            Войти
          </div>
        </div>
      </header>
    </div>
  )
}

export default Landing;
