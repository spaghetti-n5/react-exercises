import React from "react";

const userInput = (props) => {
  
  const userInputStyle = {
    border: "2px solid blue"
  };

  return (
    <input
      type="text"
      onChange={props.changed}
      value={props.old}
      style={userInputStyle}/>
  );
};

export default userInput;
