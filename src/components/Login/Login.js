import React from "react";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const submitForm = (e) => {
    e.preventDefault();
    props.loginHandler(email, password)
  }

  return (
    <section className="login">
      <Header logoOnly={true} />
      <section className="login__container">
        <h1 className="login__title">
          Рады видеть!
        </h1>

        <form className="login__form" name="login" onSubmit={submitForm}>
          <section className="login__fields">
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
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
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
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password}
            />
          </section>
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
