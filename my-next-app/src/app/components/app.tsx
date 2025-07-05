"use client" ;
import React, { useState } from "react";

const Buttoncount = () => {
  const [num, setNum] = useState(1);

  const HandleAdd = () => {
    setNum((currValue) => {
      return currValue + 1;
    });
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={HandleAdd}>Add</button>
      
    </div>
  );
};

export default Buttoncount;




