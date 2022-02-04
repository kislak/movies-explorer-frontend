import React from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js"

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="profile">
      <Header/>
      <h1 className="profile__welcome">
        {`Привет, ${currentUser.name}!`}
      </h1>

      <section className="profile__details">
        <section className="profile__detail">
          <p className="profile__details-title">
            Имя
          </p>
          <p className="profile__details-item">
            {currentUser.name}
          </p>
        </section>
        <section className="profile__detail">
          <p className="profile__details-title">
            E-mail
          </p>
          <p className="profile__details-item">
            {currentUser.email}
          </p>
        </section>
      </section>

      <nav className="profile__links" >
        <a className="profile__link" href="#">
          Редактировать
        </a>
        <a className="profile__link profile__link_red" href="#" onClick={props.logoutHandler}>
          Выйти из аккаунта
        </a>
      </nav>
    </section>
  )
}

export default Profile;
