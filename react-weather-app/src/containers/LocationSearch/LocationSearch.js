import React, { Component } from 'react';

import Form from '../../components/Form/Form.js';

class LocationSearch extends Component {
  state = {
    inputValue: ""
  }

  inputChangedHandler = (event) => {
    const updatedInput = event.target.value;
    this.setState({inputValue: updatedInput})
    console.log(updatedInput);
  }


  inputSubmitHandler = (event) => {
    alert('Submitted: ' + this.state.inputValue);
    event.preventDefault();
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
