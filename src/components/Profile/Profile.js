import React from "react";
import Header from "../Header/Header";

function Profile(props) {
  return (
    <section className="profile">
      <Header/>
      <h1 className="profile__welcome">
        Привет, Виталий!
      </h1>

      <section className="profile__details">
        <section className="profile__detail">
          <p className="profile__details-title">
            Имя
          </p>
          <p className="profile__details-item">
            Виталий
          </p>
        </section>
        <secction className="profile__detail">
          <p className="profile__details-title">
            E-mail
          </p>
          <p className="profile__details-item">
            pochta@yandex.ru
          </p>
        </secction>
      </section>

      <nav className="profile__links" >
        <a className="profile__link" href="#">
          Редактировать
        </a>
        <a className="profile__link profile__link_red" href="#">
          Выйти из аккаунта
        </a>
      </nav>
    </section>
  )
}

export default Profile;
