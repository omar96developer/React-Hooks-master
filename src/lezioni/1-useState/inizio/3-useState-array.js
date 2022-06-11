import React, { useState } from "react";
import { data } from "../../../data";

const ArrayState = () => {
  const [people, setPeople] = useState(data);
  //console.log(people);
  const removeItem = (id) => {
    //let newPeople = people.filter((el) => el.id !== id);
    setPeople(oldPeople => {
      return oldPeople.filter(value => value.id !== id);
    });
  };
  return (
    <>
      {people.map((el) => {
        const { id, name } = el;
        return (
          <div key={id} className="item shadow">
            <h5>{name}</h5>
            <button
              type="button"
              className="button delette-button"
              onClick={() => removeItem(id)}
            >
              X
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ArrayState;
