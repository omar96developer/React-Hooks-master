import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  //console.log('render');
  function dimensioneFinestra() {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    //console.log('setto adeventlistener');
    window.addEventListener("resize", dimensioneFinestra);
    return () => {
      //console.log('rimuivo adeventlistener');
      window.removeEventListener('resize', dimensioneFinestra)
    };
  });
  return (
    <div
      className="container w-75 col.6  bg-white shadow"
      style={{ textAlign: "center" }}
    >
      <h1> {size}</h1>
    </div>
  );
};

export default CleanUp;
