import React, { Component } from 'react';

import Form from '../../components/Form/Form.js';

class LocationSearch extends Component {
  state = {
    inputValue: ""
  }

  /*componentDidMount() {
    console.log(this.props);
  }*/

  inputChangedHandler = (event) => {
    const updatedInput = event.target.value;
    this.setState({inputValue: updatedInput})
    //console.log(updatedInput);
  }

  inputSubmitHandler = (event) => {
    event.preventDefault();
    //Passing the inputValue of the user as query params
    this.props.history.push({
        pathname:'/weather',
        search:'?city=' + this.state.inputValue
      });
  }

  render() {
    return (
      <div>
        <Form changed={this.inputChangedHandler}
              value={this.state.inputValue}
              submitted={this.inputSubmitHandler}/>
      </div>
    );
  }
}

export default LocationSearch;
