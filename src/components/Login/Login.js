import React from "react";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  return (
    <section className="login">
      <Header headerOnly={true} />
      <section className="login__container">
        <h1 className="login__title">
          Рады видеть!
        </h1>

        <form className="login__form" name="login">

          <label
            htmlFor="login__input-name"
            className="login__input-label"
          >
            E-mail
          </label>

          <input
            id="login__input-email"
            className="login__input"
            type="text"
            name="email"
            autoComplete="off"
            required
          />

          <label
            htmlFor="login__input-name"
            className="login__input-label"
          >
            Пароль
          </label>

          <input
            id="login__input-password"
            className="login__input login__input_error"
            type="password"
            name="password"
            autoComplete="off"
            required
          />

          <button className="login__submit" type="submit">
            Войти
          </button>
          <div className="login__ref" >
            Уже зарегистрированы? <a className="login__link" onClick={() => navigate('/signup') }  >Регистрация</a>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Login;
