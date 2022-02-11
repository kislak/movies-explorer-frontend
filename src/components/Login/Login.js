import React from "react";
import Header from "../Header/Header";
import { Link } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isValidEmail, setIsValidEmail] = React.useState(true)
  const [isValidPassword, setIsValidPassword] = React.useState(true)

  const [valid, setValid] = React.useState(false)

  const validPassword = (password) => {
    return password.match(/^[a-zA-Z0-9!@#$%^&*]{8,}$/);
  };

  const validEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateForm = () => {
    setValid(isValidEmail && isValidPassword)
  }

  const submitForm = (e) => {
    e.preventDefault();
    props.loginHandler(email, password)
  }

  const emailHandler = (e) => {
    setEmail(e.currentTarget.value)
    setIsValidEmail(validEmail(e.currentTarget.value))
  }

  const passwordHandler = (e) => {
    setPassword(e.currentTarget.value)
    setIsValidPassword(validPassword(e.currentTarget.value))
  }

  React.useEffect(() => {
    validateForm();
  }, [isValidEmail, isValidPassword]);

  return (
    <section className="login">
      <Header logoOnly={true} />
      <section className="login__container">
        <h1 className="login__title">
          Рады видеть!
        </h1>

        <form className="login__form" name="login" onSubmit={submitForm} onFocus={validateForm}>
          <section className="login__fields">
            <section className="login__field">
              <label
                htmlFor="login__input-name"
                className="login__input-label"
              >
                E-mail
              </label>

              <input
                id="login__input-email"
                className={`login__input ${!isValidEmail && "login__input_error"}`}
                type="text"
                name="email"
                autoComplete="off"
                required
                onChange={emailHandler}
                value={email}
              />
              {!isValidEmail &&
              <p className="login__error ">
                некоректный формат email
              </p>
              }
            </section>
            <section className="login__field">
              <label
                htmlFor="login__input-name"
                className="login__input-label"
              >
                Пароль
              </label>

              <input
                id="login__input-password"
                className={`login__input ${!isValidPassword && "login__input_error"}`}
                type="password"
                name="password"
                autoComplete="off"
                required
                onChange={passwordHandler}
                value={password}
              />
              {!isValidPassword &&
              <p className="login__error ">
                некоректный формат Password
              </p>
              }
            </section>
            <p className="register__error-text">
              {props.serverError}
            </p>
          </section>
          <button
            className="login__submit"
            type="submit"
            disabled={!valid}
          >
            Войти
          </button>
          <div className="login__ref" >
            Уже зарегистрированы? <Link className="login__link" to='/signup' >Регистрация</Link>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Login;
