import React, { Component } from 'react';

import axios from 'axios';
import CurrentWeatherCard from '../../components/CurrentWeatherCard/CurrentWeatherCard';

class CurrentWeather extends Component {
  state = {
    inputValue: '',
    weather: '',
    temperature: 0,
    humidity: 0,
    wind: 0,
    weatherId: 0,
    weatherDetail: '',
    error: false
  }

  componentDidMount () {
    //Extracting the inputValue of the user from the query params
    const query = new URLSearchParams(this.props.location.search);
    let city = "";
    for (let param of query.entries()) {
      //console.log(param);
      this.setState({inputValue: param[1]});
      city = param[1];
      //console.log(this.props);
    }

    //Current weather API Request. The first weather condition in API respond is primary.
    axios.get('https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=fdb4c75cbd6ca2deef4b9b0db49ace4a&units=metric&q=' + city)
        .then(response => {
          console.log(response.data);
          this.setState({weather:response.data.weather[0].main,
                         temperature:response.data.main.temp,
                         humidity: response.data.main.humidity,
                         weatherId: response.data.weather[0].id,
                         weatherDetail: response.data.weather[0].description,
                         wind: response.data.wind.speed})
                         //console.log(this.state.weatherId);
        })
        .catch(error => {
          console.log(error);
          this.setState({error:true})
        });
  }

  render () {
    let displayWeather = "";
    //Problem instroducing city names related to be solved
    if (this.state.error===true || this.state.inputValue==='' || this.state.inputValue==='city') {
      displayWeather = <h2 style={{textAlign:'center'}}>City not found!</h2>
    } else {
      displayWeather = <CurrentWeatherCard
                          city={this.state.inputValue}
                          weather={this.state.weather}
                          temp={this.state.temperature}
                          humidity={this.state.humidity}
                          weatherId={this.state.weatherId}
                          weatherDetail={this.state.weatherDetail}
                          wind={this.state.wind}/>
    }

    return (
      <div>
        {displayWeather}
      </div>
    );
  }
}

export default CurrentWeather;
