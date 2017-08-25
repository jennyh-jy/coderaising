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

// login 안 한 유저가 New Post 버튼 클릭했을 때 alert 띄우기?
  render() {
    return (
      <div>
      <button type="button"><Link to="/newpost">New Post</Link></button>
        {this.state.posts.map((post) =>
          <div>
          {post.number}  <Link to={`/posts/${post.number}`}>{post.title}</Link>   {post.username}   {post.createdAt}
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
