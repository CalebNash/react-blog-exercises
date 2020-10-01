import React from 'react';

class BlogList extends React.Component{
  render() {
    const post = this.props.post;

    return(
      <div className='col-8'><h3>{post.title}</h3><p>{post.body}</p></div>
    )
  }
};

export default BlogList;
