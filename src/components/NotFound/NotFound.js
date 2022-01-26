import React from "react";
import {useNavigate} from "react-router-dom";

function NotFound(props) {
  const navigate = useNavigate();
  return (
    <section className="not-found">
      <p className="not-found__code">
        404
      </p>
      <p className="not-found__details">
        Страница не найдена
      </p>
      <a className="not-found__back" onClick={() => navigate(-1)}>
        Назад
      </a>
    </section>

  )
}

export default NotFound;
