import React, { useState, useEffect } from "react";

const ControlledInput = () => {
  const [persona, setPersona] = useState({
    nome: "",
    email: "",
    cellulare: "",
  });

  const [persone, setPersone] = useState([]);
  console.log(persone);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persona.nome && persona.email && persona.cellulare) {
      setPersone([
        ...persone,
        {
          id: new Date(Date.now()).getTime().toString(),
          ...persona,
        },
      ]);
      setPersona({
        nome: "",
        email: "",
        cellulare: "",
      });
    } else {
      alert("Riempi il form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value });
  };
  useEffect(() => {
    console.log(persona);
  }, [persona]);

  return (
    <form
      className="bg-white shadow rounded p-4" /*  onSubmit={handleSubmit} */
    >
      <div className="form-group d-flex align-items-center container mt-2">
        <label htmlFor="nome" className="text-left font-weight-bold col-2">
          Nome:
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={persona.nome}
          onChange={handleChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group d-flex align-items-center container mt-2">
        <label htmlFor="email" className="text-left font-weight-bold col-2">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={persona.email}
          onChange={handleChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group d-flex align-items-center container mt-2">
        <label htmlFor="cellulare" className="text-left font-weight-bold col-2">
          Cellulare:
        </label>
        <input
          id="cellulare"
          type="tel"
          name="cellulare"
          value={persona.cellulare}
          onChange={handleChange}
          className="form-control"
        ></input>
      </div>
      <button type="submit" className="btn btn-info" onClick={handleSubmit}>
        Invia
      </button>
    </form>
  );
};

export default ControlledInput;
