import React from 'react';
import Form from './Form.js'

class PersonForm extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        people: [],
      }
      this.addPerson = this.addPerson.bind(this);
    }

    addPerson(person) {
      console.log('people', person);
      const people = [...this.state.people];
      people.push(person);
      this.setState({people});
      console.log(this.state.people);
    }

  render() {
    return (
      <Form addPerson={this.addPerson}/>
    )
  }
}

export default PersonForm;
