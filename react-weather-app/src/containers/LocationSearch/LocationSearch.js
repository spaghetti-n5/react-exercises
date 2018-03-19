import React, { Component } from 'react';

import Form from '../../components/Form/Form';
import { withRouter } from 'react-router-dom';

class LocationSearch extends Component {
  state = {
    inputValue: ""
  }

  inputChangedHandler = (event) => {
    this.setState({inputValue: event.target.value})
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

export default withRouter(LocationSearch);
