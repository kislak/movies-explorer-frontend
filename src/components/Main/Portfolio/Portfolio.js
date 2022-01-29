import React from "react";
function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://kislak.github.io/how-to-learn/" target="_blank">
            Статичный сайт
            <span className="portfolio__arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://kislak.github.io/russian-travel/" target="_blank">
            Адаптивный сайт
            <span className="portfolio__arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://kurs.nomoredomains.rocks" target="_blank">
            Одностраничное приложение
            <span className="portfolio__arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
