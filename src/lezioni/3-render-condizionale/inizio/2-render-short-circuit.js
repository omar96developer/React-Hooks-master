import React, {useState} from "react";

const ShortRender = () => {
  const [parola, setParola] = useState('valore');
  const [toggle, setToggle] = useState(false);

/* 
  //short circuit evaluation con or operator
  const esempio = parola || 'sono un esempio';

  //short circuit evaluation con && operator
  const esempio2 = parola && 'sono un esempio';

  //ternary operator esempio
  const esempio 3 = !parola ? 'sono un vero' : 'sono falso'; */


  return (
    <div>
      <h2>{parola || ' sono un esempio se non iserito un valore'}</h2>
      {
        toggle ? <h2 className="success">Vero</h2> : <h5 className="text-danger">Falso</h5>
      }
      <button className="button" onClick={()=>setToggle(!toggle)}>cambia</button>
      
    </div>
  );
};

export default ShortRender;
