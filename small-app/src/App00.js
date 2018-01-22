import React, { Component } from 'react';
import './App.css';
//I have to import the component I created
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 22},
      {name: "Stef", age: 5}
    ]
  }
  render() {
    return (
      //this is JSX code that will be compiled through React in this way:
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React app?'))
      //I am adding the component Person as an object//
      <div className="App">
       <h1>Hi I am react app</h1>
       <p>This is working</p>
       <button>Switch name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: run</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
