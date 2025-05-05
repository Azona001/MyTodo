import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const Check = ({complete, handleCheck}) => {
    const color = (complete) => (complete ? "white" : "rgba(198, 198, 198, 0.5)");
    const bgColor = (complete) => (complete ? "green" : "transparent")

  return (
    <>
       <span className="check" onClick={handleCheck}> <FaRegCheckCircle style={{color: color(complete), backgroundColor: bgColor(complete),
         borderRadius: "0.3em", width: "1.5em", height: "1.5em" }}  /> </span>
    </>
  )
}

export default Check