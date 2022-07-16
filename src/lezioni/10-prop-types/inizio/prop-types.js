import React from "react";
import { datiIncompleti } from "../../../data";
import PropTypes from "prop-types";

const PropComponent = () => {
  return (
    <div>
      {datiIncompleti.map((el) => {
        return <Prodotto key={el.id} {...el}></Prodotto>;
      })}
    </div>
  );
};
const Prodotto = ({ nome, prezzo, image }) => {
  const img = image && image.url;

  return (
    <article className="card shadow my-3 p-2">
      <div className="card-body">
        <img src={img } alt={nome} className="card-img-top" />
        <div className="card-text">
          <h4 className="card-title">{nome || 'divano default'}</h4>
          <p className="card-subtitle">€ {prezzo || 7.9}</p>
        </div>
      </div>
    </article>
  );
};

Prodotto.propTypes = {
  nome: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

export default PropComponent;
