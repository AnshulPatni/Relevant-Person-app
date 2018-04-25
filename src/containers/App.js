import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'wadaj1', name: 'Max', age: 28 },
      { id: 'ewfas1', name: 'Manu', age: 27 },
      { id: 'erger1', name: 'Stephanie', age: 25 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log("I just switched the names");
    this.setState({
      persons: [
        { name: newName },
        { name: 'Manu', age: 27 },
        { name: 'Stephanie', age: 32 }
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const new_persons = this.state.persons.slice();
    const new_persons = [...this.state.persons];
    new_persons.splice(personIndex, 1);
    this.setState({ persons: new_persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;