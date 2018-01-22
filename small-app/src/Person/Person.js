import React from 'react';
import Radium from 'radium';

import './Person.css';

//using ES6 const istead of var
//const person = () => {
  //Output dynamic content, {} say to React that is a JS function
//  return <p>I am a person and I am {Math.floor(Math.random()*30)} years old.</p>
//};

//input is the object props
const person = (props) => {
  const style = {
    '@media (min-width: 500px)':{
      width: '450px'
    }
  };
  //Output dynamic content, {} say to React that is a JS function
  return (
    <div className="Person" style={style}>
       <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
       <p>{props.children}</p>
       <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default Radium(person);
