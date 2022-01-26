import React from "react";
function NavTab(props) {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__item">
          <a className="nav-tab__button" type="button" href="#about-project">
              О проекте
          </a>
       </li>
      <li className="nav-tab__item">
          <a className="nav-tab__button" href="#techs">
              Технологии
          </a>
      </li>
      <li className="nav-tab__item">
          <a className="nav-tab__button" href="#about-me">
            Студент
          </a>
      </li>
    </ul>
  )
}

export default NavTab;
