import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const Check = ({complete, handleCheck}) => {
    // const color = (complete) => (complete ? "white" : "rgba(198, 198, 198, 0.5)");
    // const bgColor = (complete) => (complete ? "green" : "transparent")

  return (
    <>
       <span className={complete ? "check animate__pulse" : "check"} onClick={ handleCheck }> <FaRegCheckCircle id='complete' className= {complete ? 'test': ''} style={{
         borderRadius: "0.3em", width: "1.5em", height: "1.5em" }}  /> </span>
    </>
  )
}

export default Check