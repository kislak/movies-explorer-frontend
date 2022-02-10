import React from "react";
import Header from "../Header/Header";
import { Link } from 'react-router-dom';

function Register(props) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [validForm, setValidForm] = React.useState(false)
  const [validName, setValidName] = React.useState(true)
  const [validEmail, setValidEmail] = React.useState(true)
  const [validPassword, setValidPassword] = React.useState(true)

  const validNameCheck = (name) => {
    return name.length > 1 && name.length < 30
  }

  const validEmailCheck = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validPasswordCheck = (password) => {
    return password.match(/^[a-zA-Z0-9!@#$%^&*]{8,}$/);
  };

  const nameChangeHandler = (e) => {
    setName(e.currentTarget.value);
    setValidName(validNameCheck(e.currentTarget.value))
  }

  const emailChangeHandler = (e) => {
    setEmail(e.currentTarget.value)
    setValidEmail(validEmailCheck(e.currentTarget.value))
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.currentTarget.value)
    setValidPassword(validPasswordCheck(e.currentTarget.value))
  }

  const submitForm = (e) => {
    e.preventDefault();
    props.registerHandler(name, email, password)
  }

  React.useEffect(() => {
    setValidForm(validName && validEmail && validPassword)
  }, [validName, validEmail, validPassword]);

  return (
    <section className="register">
      <Header logoOnly={true} />
      <section className="register__container">
        <h1 className="register__title">
          Добро пожаловать!
        </h1>

        <form className="register__form" name="register" onSubmit={submitForm}>
          <section className="register__fields">
            <section className="register__field">

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
              {!validName &&
              <p className="login__error ">
                некоректный формат имени пользователя
              </p>
              }
            </section>

            <section className="register__field">


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
              {!validEmail &&
              <p className="login__error ">
                некоректный формат email
              </p>
              }

            </section>

            <section className="register__field">

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
              {!validPassword &&
              <p className="login__error ">
                некоректный формат пароля
              </p>
              }

            </section>
            <p className="register__error-text">
              {props.serverError}
            </p>

          </section>
          <button
            className="register__submit"
            disabled={!validForm}
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
