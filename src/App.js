import React, { Component } from 'react';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

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
      return p.id === id
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
    const newStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })
          }
        </div>
      );
      newStyle.backgroundColor = 'red';
      // newStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    };

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');  // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold);');   // classes = ['red', 'bold']
    }

    return (
      //<StyleRoot>
        <div className="App">
          <h1>I am a React App!</h1>
          <p className={classes.join(' ')}>This is really working!!!</p>
          {/* <button
              style={newStyle} 
              onClick={this.switchNameHandler.bind(this, 'Maximilian!!!')}>Switch Name</button> */}
          <button
            style={newStyle}
            onClick={this.togglePersonsHandler.bind(this, 'Maximilian!!!')}>Toggle Persons</button>
          {persons}
        </div>
      //</StyleRoot>
    );
  }
}

export default App;
//export default Radium(App);