import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DEFAULT_CATEGORY = '--SELECT--';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedCategory: DEFAULT_CATEGORY,
    };
  }

  categoryChange(event) {
    this.setState({
      selectedCategory: event.target.value
    })
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
      <div className="content-padding">
      <button type="button"><Link to="/newpost">New Post</Link></button>
      <div>
      Categories: <select onChange={this.categoryChange.bind(this)}>
          <option value="--SELECT--">--SELECT--</option>
          <option value="C++">C++</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>
        {this.state.posts.filter((post, i) => {
          if (this.state.selectedCategory === DEFAULT_CATEGORY) {
            return true;
          }
          return post.categories === this.state.selectedCategory;
        })
          .map((post, i) =>
          <div>
          {post.number}  <Link to={`/posts/${post.number}`}>{post.title}</Link>   {post.categories}   {post.username}   {post.createdAt}
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
