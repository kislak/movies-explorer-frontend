import React from "react";
function AboutMe(props) {
  return (
    <section className="about-me">
        <a name="about-me"/>
        <h2 className="about-me__title">
        Студент
      </h2>
      <div className="about-me__details">
        <div className="about-me__data">
            <h2 className="about-me__name">
                Сергей
            </h2>
            <p className="about-me__short">
                Фронтенд-разработчик, 38 лет
            </p>
            <p className="about-me__text">
                Я родился и живу в Минске,
                закончил оттеление программирования МГВРК.
                У меня есть жена и сын.
                Я люблю слушать музыку,
                а ещё увлекаюсь футболом.
                С 2005 начал кодить.
                С 2019 года работаю в компании «Фрешли».
                Пишу на руби он рейлс.
                После того, как прошёл курс по веб-разработке,
                начал заниматься фриланс-заказами.
            </p>
            <ul className="about-me__links">
                <li>
                    <a className="about-me__link" href="https://www.facebook.com/kislak.sergey" target="_blank">
                        Facebook
                    </a>
                </li>
                <li>
                    <a className="about-me__link" href="https://github.com/kislak" target="_blank">
                        Github
                    </a>
                </li>
            </ul>
        </div>
        <img className="about-me__photo" src="https://avatars.githubusercontent.com/u/583063?v=4" alt="мое фото"/>
      </div>
          <h2 className="about-me__portfolio-title">Портфолио</h2>
          <ul className="about-me__portfolio-items">
              <li className="about-me__portfolio-item">
                  <a className="about-me__portfolio-link" href="https://kislak.github.io/how-to-learn/" target="_blank">
                      Статичный сайт
                      <span className="about-me__portfolio-arrow">↗</span>
                  </a>
              </li>
              <li className="about-me__portfolio-item">
                  <a className="about-me__portfolio-link" href="https://kislak.github.io/russian-travel/" target="_blank">
                      Адаптивный сайт
                    <span className="about-me__portfolio-arrow">↗</span>
                  </a>
              </li>
              <li className="about-me__portfolio-item">
                  <a className="about-me__portfolio-link" href="https://kurs.nomoredomains.rocks" target="_blank">
                      Одностраничное приложение
                    <span className="about-me__portfolio-arrow">↗</span>
                  </a>
              </li>

          </ul>
    </section>
  )
}

export default AboutMe;
