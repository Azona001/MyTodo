import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const Check = ({complete, handleCheck}) => {
    const color = (complete) => (complete ? "white" : "black");
    const bgColor = (complete) => (complete ? "green" : "white")

  return (
    <>
       <span className="check" onClick={handleCheck}> <FaRegCheckCircle style={{color: color(complete), backgroundColor: bgColor(complete),
         borderRadius: "0.3em", width: "1.5em", height: "1.5em" }} /> </span>
    </>
  )
}

export default Check