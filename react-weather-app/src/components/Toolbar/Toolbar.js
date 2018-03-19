import React from 'react';
import { Link } from 'react-router-dom';

import LocationSearch from '../../containers/LocationSearch/LocationSearch';
import classes from './Toolbar.css';
import logo from '../../assets/images/logo.png';

const toolbar = () => (
  <header className={classes.Toolbar}>
    <Link to="/">
      <div className={classes.Logo}>
        <img src={logo} alt="weather-logo"/>
      </div>
    </Link>
    <nav>
      <LocationSearch />
    </nav>
  </header>
);

export default toolbar;
