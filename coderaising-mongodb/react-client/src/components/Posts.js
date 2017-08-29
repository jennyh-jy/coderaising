import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPost: null,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/posts')
    .then(res => {
      this.setState({posts: res.data});
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <button type="button"><Link to="/newpost">New Post</Link></button>
        {this.state.posts.map((post, i) =>
          <div>
          {post.number}  <Link to={`/posts/${post.number}`}>{post.title}</Link>   {post.username}   {post.createdAt}
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
