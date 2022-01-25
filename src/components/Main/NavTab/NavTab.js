import React from "react";
function NavTab(props) {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__item">
          <a className="nav-tab__button" type="button" href="#">
              О проекте
          </a>
       </li>
      <li className="nav-tab__item">
          <a className="nav-tab__button" href="#">
              Технологии
          </a>
      </li>
      <li className="nav-tab__item">
          <a className="nav-tab__button" href="#">
            Студент
          </a>
      </li>
    </ul>
  )
}

export default NavTab;
