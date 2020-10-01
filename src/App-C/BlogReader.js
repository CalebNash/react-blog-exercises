import React from 'react';
import BlogList from './BlogList.js'

class BlogReader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [
        {
          title: 'First Title',
          body: '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Second Title',
          body: ' 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Third Title',
          body: '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Fourth Title',
          body: '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
      ],
     pickedBlog: {},
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(blogIndex) {
    const blogPost = this.state.blogs[blogIndex];
    this.setState({pickedBlog: blogPost});
  }


  render() {
    const blogs = this.state.blogs.map((blog, index) => (<li key={index}><div className=' blogInfo' onClick={() => this.handleClick(index)}><h3>{blog.title}</h3><p>{blog.body}</p></div></li>))
    return(
      <div className="container">
        <div className="row">
          <ul className="col-4">{blogs}</ul>
          <BlogList post={this.state.pickedBlog}/>
        </div>
      </div>
    )
  }
}

export default BlogReader;
