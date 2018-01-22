import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="userOutput">
      <p>Username</p>
      <p>{props.userName}</p>
    </div>
  );
};

export default userOutput;
