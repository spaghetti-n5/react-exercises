import React from 'react';

import classes from './CurrentWeatherCard.css';
import utils from '../../utils/utils';

const currentWeatherCard = (props) => {
  let icon, alt;
  [icon, alt]= utils.getIcon(props.weatherId);
  let weather = <img className={classes.imgCurrentWeather} src={icon} alt={alt}/>
    return (
      <div className={classes.CurrentWeather}>
      <h2>Current weather for <span style={{textTransform: 'capitalize'}}>{props.city}</span></h2>
        {weather}
        <p><strong>{props.weather} ({props.weatherDetail}</strong>)</p>
        <p>Temperture: {props.temp} °C</p>
        <p>Humidity: {props.humidity} %</p>
        <p>Wind: {props.wind} m/s</p>
      </div>
    );
}

export default currentWeatherCard;
