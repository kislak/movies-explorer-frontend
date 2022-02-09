import React from "react";
import Header from "../Header/Header";
import { Link } from 'react-router-dom';

function Register(props) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [valid, setValid] = React.useState(false)
  const [validName, setValidName] = React.useState(true)
  const [validEmail, setValidEmail] = React.useState(true)
  const [validPassword, setValidPassword] = React.useState(true)

  const validNameCheck = () => {
    return name.length > 1 && name.length < 30
  }

  const validEmailCheck = () => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validPasswordCheck = () => {
    return password.match(/^[a-zA-Z0-9!@#$%^&*]{8,}$/);
  };

  const validateForm = () => {
    setValidName(validNameCheck())
    setValidEmail(validEmailCheck())
    setValidPassword(validPasswordCheck())
    setValid(validName && validPassword && validEmail)
  }

  const nameChangeHandler = (e) => {
    setName(e.currentTarget.value);
    validateForm()
  }

  const emailChangeHandler = (e) => {
    setEmail(e.currentTarget.value)
    validateForm()
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.currentTarget.value)
    validateForm()
  }

  const submitForm = (e) => {
    e.preventDefault();

    if (valid) {
      props.registerHandler(name, email, password)
    }
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
            className={`register__input-label ${!validName && 'register__input_error'}`}
          >
            Имя
          </label>

          <input
            id="register__input-name"
            className={`register__input ${!validName && 'register__input_error'}`}
            type="text"
            name="name"
            autoComplete="off"
            required
            onChange={nameChangeHandler}
            value={name}
          />

          <label
            htmlFor="register__input-name"
            className={`register__input-label ${!validEmail && 'register__input_error'}`}
          >
            E-mail
          </label>

          <input
            id="register__input-email"
            className={`register__input ${!validEmail && 'register__input_error'}`}
            type="text"
            name="email"
            autoComplete="off"
            required
            onChange={emailChangeHandler}
            value={email}
          />

          <label
            htmlFor="register__input-name"
            className={`register__input-label ${!validPassword && 'register__input_error'}`}
          >
            Пароль
          </label>

          <input
            id="register__input-password"
            className={`register__input ${!validPassword && 'register__input_error'}`}
            type="password"
            name="password"
            autoComplete="off"
            required
            onChange={passwordChangeHandler}
            value={password}
          />
            <p className="register__error-text">
              {props.serverError}
            </p>

          </section>
          <button
            className="register__submit"
            disabled={!valid}
            type="submit"
          >
            Зарегистрироваться
          </button>
          <div className="register__ref" >
            Уже зарегистрированы? <Link className="register__link" to="/signin" >Войти</Link>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Register;
