import React, { Component } from 'react';
import './App.css';
//I have to import the component I created
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: "a1", name: "Max", age: 28},
      {id: "a2", name: "Manu", age: 22},
      {id: "a3", name: "Stef", age: 5}
    ],
    otherState: "some other value",
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState ({showPersons: !doesShow});
  }

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }
  /*adding sudo selectors with Radium ':hover', in quotation mark because start with : */
  /*I have to add now the set of style in my hover state so a js object */
  render() {
   const style = {
     backgroundColor: 'green',
     color: 'white',
     font: 'inherit',
     border: '1px solid blue',
     padding:'8px',
     cursor:'pointer'
   };

   let persons = null;
   if (this.state.showPersons) {
     persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
                    click={()=> this.deletePersonsHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={( event ) => this.nameChangedHandler( event, person.id )}/>
        })}
      </div>
    );
    /*Set the style dynamically*/
    style.backgroundColor = 'red';
   }

   /*Setting CSS class to the paragraph dinamically, related to the number of persons are displayed*/
   /*I have than to join the array Classes to create a real CSS class*/
   const classes =[];
   if (this.state.persons.length <= 2) {
     classes.push("red"); //classes = ['red']
   }
   if (this.state.persons.length <=1) {
     classes.push("bold"); //classes = ['red', 'bold']
   }

   /*<styleRoot>when using mediaquery*/
    return (
        <div className="App">
          <h1>Hi I am react app</h1>
          <p className={classes.join(" ")}>This is working</p>
          <button
            style={style}
            onClick = {this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
         </div>
    );
  }
}

/*I wrap my component with Radium that will inject the new property, it can be used in all components*/
export default App;
