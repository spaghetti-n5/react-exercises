import React from 'react';

import classes from './CurrentWeatherCard.css';
import clear from '../../assets/images/clear.png';
import cloud from '../../assets/images/cloud.png';
import defaultImage from '../../assets/images/default.png';
import drizzle from '../../assets/images/drizzle.png';
import extreme from '../../assets/images/extreme.png';
import mist from '../../assets/images/mist.png';
import rain from '../../assets/images/rain.png';
import snow from '../../assets/images/snow.png';
import thunder from '../../assets/images/thunder.png';

import Spinner from '../../UI/Spinner/Spinner';

const currentWeatherCard = (props) => {
  //console.log(props.weatherId);
  var weather = "";
  if (props.weatherId === 0) {
    weather = <Spinner />
  }else if (props.weatherId >= 200 && props.weatherId <= 232 ) {
    weather = <img src={thunder} alt="Thunderstorm" />
  }else if (props.weatherId >= 300 && props.weatherId <= 321) {
        weather = <img src={drizzle} alt="Drizzle" />
  }else if (props.weatherId >= 500 && props.weatherId <= 531) {
    weather = <img src={rain} alt="Rain" />
  }else if (props.weatherId >= 600 && props.weatherId <= 622) {
      weather = <img src={snow} alt="Snow" />
  }else if (props.weatherId >= 701 && props.weatherId <= 781) {
    weather = <img  src={mist} alt="Mist" />
  }else if (props.weatherId === 800) {
    weather = <img src={clear} alt="Clear" />
  }else if (props.weatherId >= 801 && props.weatherId <= 804) {
    weather = <img src={cloud} alt="Clouds" />
  }else if (props.weatherId >= 900 && props.weatherId <= 962) {
    weather = <img src={extreme} alt="Extreme" />
  }else {
    weather = <img src={defaultImage} alt="DefaultImage" />
  }

    return (
      <div className={classes.CurrentWeather}>
        <h2>Current weather for <span style={{textTransform: 'capitalize'}}>{props.city}</span></h2>
        {weather}
        <p><strong>{props.weather} ({props.weatherDetail}</strong>)</p>
        <p>Temperture: {props.temp} F</p>
        <p>Humidity: {props.humidity} %</p>
      </div>
    );
}

export default currentWeatherCard;
