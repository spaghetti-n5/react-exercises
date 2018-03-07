import React, { Component } from 'react';

import axios from 'axios';

class CurrentWeather extends Component {
  state = {
    inputValue: '',
    weather: '',
    temperature: 0,
    humidity: 0
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
    axios.get('https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=fdb4c75cbd6ca2deef4b9b0db49ace4a&q=' + city)
        .then(response => {
          //console.log(response.data);
          this.setState({weather:response.data.weather[0].main,
                         temperature:response.data.main.temp,
                         humidity: response.data.main.humidity})
        })
        .catch(error => {
          console.log(error);
        });
  }

  render () {
    return (
      <div>
        <p>Current weather for: {this.state.inputValue}</p>
        <p>{this.state.weather}</p>
        <p>Temperature in F{this.state.temperature}</p>
        <p>Humidity {this.state.temperature}</p>
      </div>
    );
  }
}

export default CurrentWeather;
