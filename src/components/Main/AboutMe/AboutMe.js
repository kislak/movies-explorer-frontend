import React from "react";
function AboutMe(props) {
  return (
    <section className="about-me">
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
            <ul className="about-me__link-items">
                <li className="about-me__link-item">
                    <a className="about-me__link" href="#">
                        Facebook
                    </a>
                </li>
                <li className="about-me__link">
                    <a className="about-me__link" href="#">
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
                  <a className="about-me__portfolio-link" href="#">
                      Статичный сайт
                      <span className="about-me__portfolio-arrow">↗</span>
                  </a>
              </li>
              <li className="about-me__portfolio-item">
                  <a className="about-me__portfolio-link" href="#">
                      Адаптивный сайт
                    <span className="about-me__portfolio-arrow">↗</span>
                  </a>
              </li>
              <li className="about-me__portfolio-item">
                  <a className="about-me__portfolio-link" href="#">
                      Одностраничное приложение
                    <span className="about-me__portfolio-arrow">↗</span>
                  </a>
              </li>

          </ul>
    </section>
  )
}

export default AboutMe;
