import React from "react";

function AboutProject(props) {
  return (
    <section className="about-project">
      <a name="about-project"/>

      <h2 className="about-project__title">
        О проекте
      </h2>
      <div className="about-project__details">
        <section className="about-project__section">
          <h2 className="about-project__section-title">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="about-project__section-text">
            Составление плана,
            работу над бэкендом,
            вёрстку,
            добавление функциональности
            и финальные доработки.
          </p>
        </section>
        <section className="about-project__section">
          <h2 className="about-project__section-title">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="about-project__section-text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать,
            чтобы успешно защититься.
          </p>
        </section>
      </div>
      <div className="about-project__illustration">
        <div className="about-project__illustration-item">1 неделя</div>
        <div className="about-project__illustration-item">4 недели</div>
        <div className="about-project__illustration-item">Back-end</div>
        <div className="about-project__illustration-item">Front-end</div>
      </div>
    </section>
  )
}

export default AboutProject;
