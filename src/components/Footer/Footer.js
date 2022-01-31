import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2022
        </p>

        <ul className="footer__links">
          <li>
            <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/yandex/" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://www.facebook.com/yandex/" target="_blank">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
