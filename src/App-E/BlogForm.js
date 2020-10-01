import React from 'react'

class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleInput(event){
  this.setState({[event.target.name]: event.target.value})
}

handleSubmit(event) {
  event.preventDefault();
  this.props.createBlog(this.state);
  this.setState({title: '', body: ''});
}

  render() {
    return(
    <form className='col-12 col-md-6 mb-5' onSubmit={this.handleSubmit}>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input type="text" className='form-control' id='title' name='title' value={this.state.title} onChange={this.handleInput}/>
      </div>
      <div className='form-group'>
        <label htmlFor='body'>Body</label>
        <textarea type="text" className='form-control' id='body' name='body' value={this.state.body} onChange={this.handleInput}/>
      </div>
      <button type='submit' className='btn btn-primary'>Save Post</button>
    </form>
    )
  }
}

export default BlogForm;
