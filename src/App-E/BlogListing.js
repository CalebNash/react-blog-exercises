import React from 'react'

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      body: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleInput(event){
    this.setState({[event.target.name]: event.target.value});
  }

  toggleEdit(blog = {} ){
    this.setState({isEditing: !this.state.isEditing, ...blog});
  }

  handleSave(){
    const updatedBlog = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.editBlog(this.props.index, updatedBlog);
    this.toggleEdit();
  }

  render() {
    return(
      <div className='list-group mb-5'>
        <div className='list-group-item list-group-item-action'>
          <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-3'>{this.props.blog.title}</h5>
            {
              this.state.isEditing
              ? <textarea row='20' value={this.state.body} onChange={this.handleInput} name ='body'/>
              : <p className='mb-1'>{this.props.blog.body}</p>
            }

          </div>
          {
            this.state.isEditing
            ? <button className='btn btn-link' onClick={this.handleSave}>Save</button>
            : <button className='btn btn-link' onClick= {() => this.toggleEdit(this.props.blog)}>Edit</button>
          }
            <button className='btn btn-link' onClick={() => this.props.removeBlog(this.props.blog)}>Delete</button>
        </div>
      </div>
    )
  }
}

class BlogListing extends React.Component{
  render() {
    const blogs = this.props.blogs.map((blog, index) => <BlogItem key ={index} index={index} blog={blog} removeBlog={this.props.removeBlog} editBlog={this.props.editBlog}/>);
    return(
      <div className='col-12 col-md-6 mb-5'>{blogs}</div>
    )
  }
}
export default BlogListing
