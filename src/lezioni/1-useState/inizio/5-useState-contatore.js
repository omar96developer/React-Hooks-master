import React, { useState } from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);
  const reset = () => {
    setContatore(0)
  }
  const dimcontatore = () => {
    setContatore(contatore - 1);
  }
  const aumenta = () => {
    /* setContatore(oldValue => {
      if(oldValue + 1 === 6){
        return oldValue;  
      }
      return oldValue + 1
    }) */
    setTimeout(function () {
      setContatore(oldValue => {
        return oldValue + 1;
      });
    }, 2000);
  }
  return (
    <div className="bg-white shadow rounded p-5 w-75 col-6 offset-2">
      <h3>{contatore}</h3>
      <div className="d-flex justify-content-between">
        <button className="button my-2" onClick={dimcontatore}>Diminuisci</button>
        <button className="button my-2" onClick={aumenta}>Aumenta</button>
      </div>
      <button className="button reset-button my-2" onClick={reset}>resetta</button>
    </div>
  );
};

export default CounterComponent;
