import React, { Component } from 'react';

class CurrentWeather extends Component {
  state = {
    inputValue: ''
  }

  componentDidMount () {
    //Extracting the inputValue of the user from the query params
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      console.log(param);
      this.setState({inputValue: param[1]});
    }
  }

  render () {
    return (
      <p>Weather for: {this.state.inputValue}</p>
    );
  }
}

export default CurrentWeather;
