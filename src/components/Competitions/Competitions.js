import React from "react";

import "./_Competitions.scss";

const Competitions = () => {
  return (
    <section className="competitions">
      <h2 className="competitions__title">Competitions</h2>
      <div className="competitions__map">
        <div className="competitions__map--figure">MAP</div>
      </div>
      <div className="competitions__range">
        <div className="competitions__range--info">
          <span className="competitions__range--title">Todos los eventos</span>
          <p className="competitions__range--text">
            Busca por proximidad los eventos más cercanos a tí
          </p>
        </div>
        <div className="competitions__range--buttons">
          <span className="btn">
            <p className="btn__text">10 km</p>
          </span>
          <span className="btn">
            <p className="btn__text">20 km</p>
          </span>
          <span className="btn">
            <p className="btn__text">100 km</p>
          </span>
          <span className="btn">
            <p className="btn__text">+100 km</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
