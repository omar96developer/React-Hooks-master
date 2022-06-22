import React, { useState, useEffect } from "react";

const ControlledInput = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [persona, setPersona] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nome && email && cellulare) {
      setPersona([
        ...persona,
        {
          id: new Date(Date.now()).getTime().toString(),
          nome,
          email,
          cellulare,
        },
      ]);
      setNome("");
      setEmail("");
      setCellulare("");
    } else {
      alert("Riempi il form");
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCellulare(value);
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
          value={nome}
          onChange={(e) => setNome(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={cellulare}
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
