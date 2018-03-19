import React from 'react';

import classes from './Form.css';

const form = (props) => (
  <form className={classes.Form} onSubmit={props.submitted}>
    <input type="text" onChange={props.changed} value={props.value} placeholder="City name"/>
    <input className={classes.Button} type="submit" value="Submit" />
  </form>
);

export default form;
