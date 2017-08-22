import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';



class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  fetch() {
    axios.get('http://localhost:8000/posts')
    .then(res => {
      this.setState({posts: res.data});
    })
    .catch(res => console.log('Failed to update posts data'));
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div>
      <button type="button"><Link to="/newpost">New Post</Link></button>
        {this.state.posts.map((post) =>
          <div>
          {post.number}  <Link to="/posts/:number">{post.title}</Link>   {post.username}   {post.createdAt}
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
