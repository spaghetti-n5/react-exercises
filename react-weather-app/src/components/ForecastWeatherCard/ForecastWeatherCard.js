import React from 'react';

import classes from './ForecastWeatherCard.css';
import utils from '../../utils/utils';

const forecastWeatherCard = (props) => {
  let icon, alt;
  [icon, alt]= utils.getIcon(props.weatherId);
  let weather = <img src={icon} alt={alt}/>
    return (
      <div className={classes.ForecastWeather}>
        {weather}
        <p><strong>{props.weather} ({props.weatherDetail}</strong>)</p>
        <p>Temperture: {props.temp} °C</p>
        <p>Humidity: {props.humidity} %</p>
      </div>
    );
}

export default forecastWeatherCard;
