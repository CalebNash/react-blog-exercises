import React from 'react';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
    // console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <form className="col" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Enter Title.</label>
          <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleInput}/>
          <label htmlFor="body">Enter Blog Post.</label>
          <textarea type="text" className="form-control" id="body" name="body" value={this.state.body} onChange={this.handleInput}/>
        </div>
        <button className="btn btn-danger">Post</button>
    </form>
    )
  }
}

export default BlogPost;
