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
      <div className="margin-top">
      <button type="button"><Link to="/newpost">New Post</Link></button>
      <div>
      categories: <select name="categories" onChange={e => this.categoryChange(e)}>
                 <option value="C++">C++</option>
                 <option value="JavaScript">JavaScript</option>
                 <option value="select" selected="selected">선택하세요</option>
                 </select>
      </div>
        {this.state.posts.map((post, i) =>
          <div>
          {post.number}  <Link to={`/posts/${post.number}`}>{post.title}</Link>   {post.categories}   {post.username}   {post.createdAt}
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
