import React, { Component } from 'react';

import axios from 'axios';
import ForecastWeatherCard from '../../components/ForecastWeatherCard/ForecastWeatherCard';

class Forecast extends Component {
  state = {
    inputValue: '',
    error: false,
    forecast: []
  }

  componentDidMount () {
    console.log("Forecast_componentDidMount", this.state.forecast);
    //Extracting the inputValue of the user from the query params
    const query = new URLSearchParams(this.props.location.search);
    let city = "";
    for (let param of query.entries()) {
      //console.log(param);
      this.setState({inputValue: param[1]});
      city = param[1];
    }
    //5 day forecast API Request
    axios.get('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fdb4c75cbd6ca2deef4b9b0db49ace4a&units=metric&q=' + city)
        .then(response => {
          let forecastData = [];
          forecastData.push(response.data.list[8], response.data.list[16], response.data.list[24], response.data.list[32]);
          this.setState({forecast: forecastData})
          //console.log(forecastData);
          })
        .catch(error => {
          console.log(error);
          this.setState({error:true})
        });
  }

  componentWillMount(){
      console.log("Forecast_componentWillMount", this.state.forecast);
  }

  render () {
    console.log("Forecast_ComponentRender", this.state.forecast);
    const weatherForecast = this.state.forecast.map(day => {
      return <ForecastWeatherCard key={day.dt}
                                  weather={day.weather[0].main}
                                  temp={day.main.temp}
                                  humidity={day.main.humidity}
                                  weatherId={day.weather[0].id}
                                  weatherDetail={day.weather[0].description}/>
    });

    return (
      <div>
        {weatherForecast}
      </div>
    );
  }
}

export default Forecast;
