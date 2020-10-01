import React from 'react';
// import BlogPost from './App-A/BlogPost';
// import PersonForm from './App-B/PersonForm.js';
// import BlogReader from './App-C/BlogReader.js';
import BlogApp from './App-E/index.js'
//
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'hello',
    }
  }
  render() {
    return(
      <div>
      <button className="btn btn-primary">A</button>
      <button className="btn btn-primary">B</button>
      <button className="btn btn-primary">C</button>
      <button className="btn btn-primary">D</button>
      <button className="btn btn-primary">E</button>
      <div className='container'>
      <BlogApp/>
      </div>
      </div>
    )
  }
}

export default App;
