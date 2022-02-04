import React from "react";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const submitForm = (e) => {
    e.preventDefault();
    props.registerHandler(name, email, password)
  }

  return (
    <section className="register">
      <Header logoOnly={true} />
      <section className="register__container">
        <h1 className="register__title">
          Добро пожаловать!
        </h1>

        <form className="register__form" name="register" onSubmit={submitForm}>
          <section className="register__fields">
          <label
            htmlFor="register__input-name"
            className="register__input-label"
          >
            Имя
          </label>

          <input
            id="register__input-name"
            className="register__input"
            type="text"
            name="name"
            autoComplete="off"
            required
            onChange={(e) => setName(e.currentTarget.value)}
            value={name}
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
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
          />

          <label
            htmlFor="register__input-name"
            className="register__input-label"
          >
            Пароль
          </label>

          <input
            id="register__input-password"
            className="register__input register__input_error"
            type="password"
            name="password"
            autoComplete="off"
            required
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
          <p className="register__error-text">
            Что-то пошло не так...
          </p>
          </section>
          <button className="register__submit" type="submit">
            Зарегистрироваться
          </button>
          <div className="register__ref" >
            Уже зарегистрированы? <a className="register__link" onClick={() => navigate('/signin') } >Войти</a>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Register;
