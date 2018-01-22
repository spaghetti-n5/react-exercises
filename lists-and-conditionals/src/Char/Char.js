import React from "react";
import Char from "./Char.css";

const char = (props) => {
  return (
    <div className="charStyle" onClick={props.clicked}>
      {props.letters}
    </div>
  );
};

export default char;
