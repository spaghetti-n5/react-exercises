import React, { Component } from 'react';
//Import a JS object, called for example classes, that contains the css classes (in App.css file) as properties
import classes from './App.css';
import Person from './Person/Person'; //Import the component I created

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

   let persons = null;
   let btnClass = '';

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
      btnClass = classes.Red;
  }

   /*Push the CSS classes not as string but as property of the classes object created*/
   const assignedClasses =[];
   if (this.state.persons.length <= 2) {
     assignedClasses.push(classes.red); //classes = ['red']
   }
   if (this.state.persons.length <= 1) {
     assignedClasses.push(classes.bold); //classes = ['red', 'bold']
   }

   /*Assign to the div the .App class not as string*/
  /*I have than to join the array Classes to create a real CSS class*/
    return (
        <div className={classes.App}>
          <h1>Hi I am react app</h1>
          <p className={assignedClasses.join(" ")}>This is working</p>
          <button
            className = {btnClass}
            onClick = {this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
         </div>
    );
  }
}

/*I wrap my component with Radium that will inject the new property, it can be used in all components*/
export default App;
