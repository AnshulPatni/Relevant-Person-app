import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props)
        console.log('[Persons.js] inside constructor');
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount()');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js]  inside componentWillReceiveProps()');
    }
    

    componentDidUpdate() {
        console.log('[UPDATE Persons.js]  inside componentDidUpdate()');
        this.lastPersonRef = React.createRef();
    }

    render() {
        console.log('[Persons.js] inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                position={index}
                age={person.age}
                key={person.id}
                ref={this.lastPersonRef}
                authenticated={this.props.isAuthenticated}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;