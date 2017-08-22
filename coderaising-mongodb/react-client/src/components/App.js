import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Posts from './Posts.js';
import Charities from './Charities.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Newpost from './Newpost.js';
import axios from 'axios';

const MainRouter = () => (
  <Router>
    <div>
      <h1>CodeRaising</h1>
      <Link to="/posts">Posts</Link>   <Link to="/charities">Charities</Link>   <Link to="/login">Log In</Link>   <Link to="/signup">Sign Up</Link>
      <hr/>
      <Route exact path="/" component={App}/>
      <Route path="/posts" component={Posts} />
      <Route path="/newpost" component={Newpost} />
      <Route path="/charities" component={Charities} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  </Router>
)

class App extends React.Component {
  render() {
    return (
      <div>
      hi
      </div>
    );
  }
}

export default MainRouter;
