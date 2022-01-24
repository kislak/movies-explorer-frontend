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
          <li className="footer__link">
            Яндекс.Практикум
          </li>
          <li className="footer__link">
            Github
          </li>
          <li className="footer__link">
            Facebook
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
