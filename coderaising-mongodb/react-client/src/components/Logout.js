import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import axios from 'axios';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    axios.get('http://localhost:8000/logout')
    .then(res => {
      alert('byebye');
    })
    .then(() => {
      this.setState({
        isLoggedIn: !this.state.isLoggedIn,
      });
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return null;
  }
}

export default withRouter(Logout);
