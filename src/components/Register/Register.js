import React from "react";
import Header from "../Header/Header";

function Register(props) {
  return (
    <section className="register">
      <Header />
      <h1 className="register__title">
        Добро пожаловать!
      </h1>

      <form className="register__form" name="register">
        <label
          htmlFor="register__input-name"
          className="register__input-label"
        >
          Имя
        </label>

        <input
          id="register__input-name"
          className="register__name"
          type="text"
          name="name"
          autoComplete="off"
          required
        />

        <label
          htmlFor="register__input-name"
          className="register__input-label"
        >
          E-mail
        </label>

        <input
          id="register__input-email"
          className="register__input"
          type="text"
          name="email"
          autoComplete="off"
          required
        />

        <label
          htmlFor="register__input-name"
          className="register__input-label"
        >
          Пароль
        </label>

        <input
          id="register__input-password"
          className="register__input"
          type="password"
          name="password"
          autoComplete="off"
          required
        />
        <p register__error>
          Что-то пошло не так...
        </p>

        <button className="register__submit" type="submit">
          Зарегистрироваться
        </button>
        <div className="register__ref" >
          Уже зарегистрированы? <a className="register__link" href="#" >Войти</a>
        </div>
      </form>
    </section>
  )
}

export default Register;
