import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/getUser/')
    .then(res => {
      this.setState({currentUser: res.data});
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
    (!this.state.currentUser)
      ? <div></div>
      : <div>
          <img src={this.state.currentUser.google.imageUrl} /><br />
          Name: {this.state.currentUser.google.name} <br />
          Email: {this.state.currentUser.google.email} <br />
          Balance: {this.state.currentUser.balance} <br />
        </div>
    )
  }
}

export default Profile;
