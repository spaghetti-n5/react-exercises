import React from 'react';
import classes from './CountryFilter.css';

const CountryFilter = (props) => (
    <input className={classes.Filter} type="button" onClick={props.clicked} value={props.country}/>
);

export default CountryFilter;
