import React, { useEffect } from "react";

const useEffectBasi = () => {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    console.log("eccomi useeffect");
    if (value < 1) {
      document.title = `Nessun Messaggio `;
    } else {
      document.title = `Nuovi messaggi: ${value} `;
    }
   
  }, [value]);

  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  };

  return (
    <div className="item">
      <h4>
        Value : <span>{value}</span>{" "}
      </h4>
      <button className="button" onClick={aumenta}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
