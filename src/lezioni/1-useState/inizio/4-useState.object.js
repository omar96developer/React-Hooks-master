import React, { useState } from "react";

const StateObject = () => {
  const [person, setPerson] = useState({
    name: "dario",
    age: 24,
    saluto: "ciao",
  });
  const cambia = () => {
    setPerson({
      ...person,
      age: 25,
      saluto: " ho fatto gli anni",
    });
  };
  return (
    <div className="item shadow">
      <div className="text-left">
        <h5>{person.name}</h5>
        <h5>{person.age}</h5>
        <h5>{person.saluto}</h5>
      </div>
      <button className="button" onClick={cambia}>Cliccami</button>
    </div>
  );
};

export default StateObject;
