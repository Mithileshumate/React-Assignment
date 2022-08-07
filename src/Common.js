import React, { useState } from "react";
import Class from "./Component/Class";
import Functional from "./Component/Functional";

const Common = () => {
  const [state, setState] = useState(false);
  const [state1, setState2] = useState("false");
  function handleChange1() {
    setState(!state);
  }
  function handleChange2() {
    setState2(!state1);
  }
  return (
    <>
      <div>
        <h1 className="heading">Styling using Functional and Class Component</h1>
        <button className="btn1" onClick={handleChange1}>To see styling in functional component</button>
        <button className="btn2" onClick={handleChange2}>To see styling in class component</button>
      </div>
      {state && <Functional/>}
      {state1 && <Class/>}
    </>
  )
}

export default Common