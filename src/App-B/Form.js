import React from 'react';

class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        first: '',
        last: '',
        address: '',
        phone: '',
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }

  handleSubmit(event) {
    event.preventDefault();
    const person = this.state;
    this.props.addPerson(person);
    // console.log(imageInfo);
    this.setState({image: '', caption: ''});
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
    // console.log(event.target.value);
  }

  render() {
    return (
      <form className="col" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="first">Enter first name.</label>
          <input type="text" className="form-control" id="first" name="first" value={this.state.first} onChange={this.handleInput}/>
          <label htmlFor="last">Enter last name.</label>
          <input type="text" className="form-control" id="last" name="last" value={this.state.last} onChange={this.handleInput}/>
          <label htmlFor="adress">Enter address.</label>
          <input type="text" className="form-control" id="address" name="address" value={this.state.address} onChange={this.handleInput}/>
          <label htmlFor="phone">Enter phone number.</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handleInput}/>
        </div>
        <button className="btn btn-danger">Sumbit</button>
    </form>
    )
  }
}

export default Form;
