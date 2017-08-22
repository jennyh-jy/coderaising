import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const Posts = () => (
  <div>
    <button type="button"><Link to="/newpost">New Post</Link></button>
      <ul>
        <li>Post 1</li>
        <li>Post 2</li>
        <li>Post 3</li>
      </ul>
  </div>
);

export default Posts;
