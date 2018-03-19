import React, { Component } from 'react';

import axios from 'axios';
import ForecastWeatherCard from '../../components/ForecastWeatherCard/ForecastWeatherCard';
import Spinner from '../../UI/Spinner/Spinner';

class Forecast extends Component {
  state = {
    inputValue: '',
    error: false,
    forecast: [],
    loading: true
  }

  componentWillReceiveProps(newProps) {
  const query = new URLSearchParams(newProps.location.search);
  let city = "";
  for (let param of query.entries()) {
    this.setState({inputValue: param[1]});
    city = param[1];
  }
  axios.get('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fdb4c75cbd6ca2deef4b9b0db49ace4a&units=metric&q=' + city)
    .then(response => {
      let forecastData = [];
      forecastData.push(response.data.list[8], response.data.list[16], response.data.list[24], response.data.list[32]);
      this.setState({forecast: forecastData})
      console.log("Forecast_WillReceiveProps",response.data);
      })
    .catch(error => {
      console.log(error);
      this.setState({error:true})
    });
}

  componentDidMount () {
    //Extracting the inputValue of the user from the query params
    const query = new URLSearchParams(this.props.location.search);
    let city = "";
    for (let param of query.entries()) {
      this.setState({inputValue: param[1]});
      city = param[1];
    }
    //5 day forecast API Request
    axios.get('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fdb4c75cbd6ca2deef4b9b0db49ace4a&units=metric&q=' + city)
        .then(response => {
          console.log("Forecast_DidMount",response.data);
          let forecastData = [];
          forecastData.push(response.data.list[8], response.data.list[16], response.data.list[24], response.data.list[32]);
          this.setState({forecast: forecastData, loading: false})
          })
        .catch(error => {
          //console.log(error);
          this.setState({error:true})
        });
  }

dataHandler = (d) => {
  const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let weekday = days[d.getDay()];
  return (weekday)
}

  render () {
    let weatherForecast = "";
    if (this.state.error===true || this.state.inputValue==='' || this.state.inputValue==='city') {
      return null;
    } else if (this.state.loading === true) {
      weatherForecast = <Spinner />
    } else {
      weatherForecast = this.state.forecast.map(day => {
        return <ForecastWeatherCard key={day.dt}
                                  weather={day.weather[0].main}
                                  temp={day.main.temp}
                                  humidity={day.main.humidity}
                                  weatherId={day.weather[0].id}
                                  weatherDetail={day.weather[0].description}
                                  weekday={this.dataHandler(new Date(day.dt_txt))}
                                  day={day.dt_txt.slice(8,10)}
                                  month={day.dt_txt.slice(5,7)}
                                  year={day.dt_txt.slice(0,4)}/>
      });
    }

    return (
      <div style={{textAlign: 'center'}}>
        {weatherForecast}
      </div>
    );
  }
}

export default Forecast;
