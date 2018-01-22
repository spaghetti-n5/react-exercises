import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
//I set the initial state: no userInput (empty string)
  state = {
    userInput: "",
  }

//I update now the state with the value introduced by the user, triggered in the onChange event
changeInputHandler = (event) => {
  this.setState ({userInput:event.target.value});
}

deleteChartHandler = (index) => {
  const text = this.state.userInput.split("");
  text.splice(index,1);
  const updatedText = text.join("");
  this.setState({userInput:updatedText});
}

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return <Char
          letters={ch}
          key={index}
          clicked={() => this.deleteChartHandler(index)}/>;
    });

    return (
      <div className="App">
        <hr/>
        <input type="text" onChange={this.changeInputHandler} value={this.state.userInput}/>
        <p> {this.state.userInput}</p>
        {/*<p> {this.state.userInput.length} </p>*/}
        <Validation textLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
