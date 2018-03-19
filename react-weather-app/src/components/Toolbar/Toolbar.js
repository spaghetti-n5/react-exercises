import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Toolbar.css';
import logo from '../../assets/images/logo.png';

const toolbar = () => (
  <header className={classes.Toolbar}>
    <Link to="/">
      <div className={classes.Logo}>
        <img src={logo} alt="weather-logo"/>
      </div>
    </Link>
  </header>
);

export default toolbar;
