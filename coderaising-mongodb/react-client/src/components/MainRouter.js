import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import App from './App';
import About from './About';
import Posts from './Posts';
import Charities from './Charities';
import Login from './Login';
import Profile from './Profile';
import Newpost from './Newpost';
import EachPost from './EachPost';
import NewCharity from './NewCharity';
import isLoggedIn, { setLoggedIn } from '../isLoggedIn';


class MainRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isLoggedIn: isLoggedIn(),
    };
  }

  logoutClick() {
    axios.get('http://localhost:8000/logout')
    .then(() => {
      this.setState({
        isLoggedIn: !this.state.isLoggedIn,
      });
      setLoggedIn(false);
      window.location = '/';
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/loginStatus')
    .then(res => {
      const {
        isLoggedIn,
      } = res.data; // default: {isLoggedIn: false}
      console.log(res.data);
      if (isLoggedIn) {
        setLoggedIn();
      }
      this.setState({
        isLoading: false,
        isLoggedIn,
      });
    })
  }

  render() {
    if (this.state.isLoading) {
      return (<div></div>);
    }
    return (
      <Router>
        <div>
          <Header loginStatus={this.state.isLoggedIn} logoutClick={this.logoutClick.bind(this)}/>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:number" component={EachPost} />
            <Route path="/newpost" component={Newpost} />
            <Route path="/charities" component={Charities} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/newcharity" component={NewCharity} />
        </div>
        </div>
      </Router>
    );
  }
}

export default MainRouter;
