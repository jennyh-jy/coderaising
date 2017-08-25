import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

import Posts from './Posts.js';
import Charities from './Charities.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Newpost from './Newpost.js';
import EachPost from './EachPost.js';
import isLoggedIn, { setLoggedIn } from '../isLoggedIn';


class MainRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/loginStatus')
    .then((res) => {
      const {
        isLoggedIn,
      } = res.data; //{isLoggedIn: false}
      console.log(res.data)
      if (isLoggedIn) {
        setLoggedIn();
      }
      this.setState({
        isLoading: false,
      });
    })
  }

  render() {
    if (this.state.isLoading) {
      return (<div></div>);
    }
    return (
    (!isLoggedIn()) ?
      <Router>
        <div>
          <h1><Link to="/">CodeRaising</Link></h1>
           <Link to="/posts">Posts</Link>   <Link to="/charities">Charities</Link>   <Link to="/login">Log In</Link>   <Link to="/signup">Sign Up</Link>
            <hr/>
            <Route exact path="/" component={App}/>
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:number" component={EachPost} />
            <Route path="/newpost" component={Newpost} />
            <Route path="/charities" component={Charities} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Login} />
            <Route path="/logout" component={Login} />
        </div>
      </Router>
    : <Router>
        <div>
          <h1><Link to="/">CodeRaising</Link></h1>
           <Link to="/posts">Posts</Link>   <Link to="/charities">Charities</Link>   <Link to="/profile">Profile</Link>   <Link to="/logout">Log Out</Link>
            <hr/>
            <Route exact path="/" component={App}/>
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:number" component={EachPost} />
            <Route path="/newpost" component={Newpost} />
            <Route path="/charities" component={Charities} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Login} />
            <Route path="/logout" component={Login} />
        </div>
      </Router>
    );
  }
}

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
