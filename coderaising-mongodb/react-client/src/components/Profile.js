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
      selectedPost: null,
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/posts/${this.props.match.params.number}`)
    .then(res => {
      this.setState({selectedPost: res.data});
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
    (!this.state.selectedPost)
      ? <div></div>
      : <div>
          Username: {this.state.selectedPost.username} <br />
          Title: {this.state.selectedPost.title} <br />
          Content: {this.state.selectedPost.content} <br />
          <button type="button" id="register-button">Register</button>
        </div>
    )
  }
}

export default Profile;
