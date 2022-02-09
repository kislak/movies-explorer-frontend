import React from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js"
import mainApi from "../../utils/MainApi";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name)
  const [email, setEmail] = React.useState(currentUser.email)
  const [serverError, setServerError] = React.useState(undefined);
  const [serverSuccess, setServerSuccess] = React.useState(undefined);
  const [validName, setValidName] = React.useState(false)
  const [validEmail, setValidEmail] = React.useState(false)
  const [valid, setValid] = React.useState(false)

  const validNameCheck = () => {
    return (name.length > 1 && name.length < 30)
  }

  const validEmailCheck = () => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateForm = () => {
    setValid(validName && validEmail)
  }

  const submitForm = (e) => {
    e.preventDefault();

    setServerSuccess(undefined);
    setServerError(undefined);

    mainApi.patchUser(name, email).then((res) => {
      props.fetchUserData()
      setServerSuccess('Профайл обновлен успешно!');
      setTimeout(() => setServerSuccess(undefined), 10000);
    }).catch((err) => {
      setServerError("При обновлении профиля произошла ошибка.");
      setTimeout(() => setServerError(undefined), 10000);
      console.log(err);
    })
  }

  const nameChangeHandler = (e) => {
    e.preventDefault();

    setName(e.target.value);
    setValidName(validNameCheck(e.target.value))
    setValidEmail(email)
  }

  const emailChangeHandler = (e) => {
    e.preventDefault();

    setEmail(e.target.value)
    setValidEmail(validEmailCheck(e.target.value))
    setValidName(name)
  }

  React.useEffect(() => {
    validateForm();
  }, [validName, validEmail]);

  return (
    <section className="profile">
      <Header/>
      <h1 className="profile__welcome">
        {`Привет, ${currentUser.name}!`}
      </h1>

      <form className="profile__form" name="profile" onSubmit={submitForm}>
        <section className="profile__details">
          <section className="profile__detail">
            <label className="profile__details-title" htmlFor="profile__input-name">
              Имя
            </label>
            <input
              id="profile__input-name"
              className="profile__details-item"
              type="text"
              name="email"
              autoComplete="off"
              required
              onChange={nameChangeHandler}
              value={name}
            />
          </section>

          <section className="profile__detail">
            <label className="profile__details-title" htmlFor="profile__input-email">
              E-mail
            </label>
            <input
              id="profile__input-name"
              className="profile__details-item"
              type="text"
              name="email"
              autoComplete="off"
              required
              onChange={emailChangeHandler}
              value={email}
            />
          </section>
        </section>


        <nav className="profile__links" >
          <button
            className="profile__submit"
            type="submit"
            disabled={!valid}
          >
            Редактировать
          </button>

          <p className="profile__notice profile__notice_error">
            {serverError}
          </p>
          <p className="profile__notice profile__notice_success">
            {serverSuccess}
          </p>

          <a className="profile__link profile__link_red" href="#" onClick={props.logoutHandler}>
            Выйти из аккаунта
          </a>
        </nav>
      </form>
    </section>
  )
}

export default Profile;
