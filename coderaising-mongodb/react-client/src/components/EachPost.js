import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import axios from 'axios';

import isLoggedIn from '../isLoggedIn';


class EachPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      selectedPostOwnerEmail: null,
    };
  }

  registerClick() {
    if (confirm("If you register for this session, 1000 won will be deducted from your account. Do you really want to proceed?") === true) {
      axios.get('http://localhost:8000/api/getUser')
      .then(res => {
        if (res.data.balance >= 1000) {
          // logged in user balance update
          axios.put('http://localhost:8000/api/updateUserBalance')
          .then(res => {
            console.log("logged in user's balance has been updated");
          })
          .catch(err => console.log('Logged in user balance update error'));
          //post owner balance update
          axios.put('http://localhost:8000/api/updatePostOwnerBalance', {email: this.state.selectedPostOwnerEmail})
          .then(res => {
            alert('You have been registered!');
          })
          .catch(err => console.log('Post owner balance update error'));
        } else {
          alert("돈없다 충전해라");
        }
      })
    }
  }

  componentWillMount() {
    if (!isLoggedIn()) {
      alert('You should log in to proceed');
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/posts/${this.props.match.params.number}`)
    .then(res => {
      this.setState({
        selectedPost: res.data,
        selectedPostOwnerEmail: res.data.email
      });
    })
    .catch(err => console.log(err));

    // axios.get('http://localhost:8000/api/getUser')
    // .then(res => {
    //   this.setState({loggedInUserBalance: res.data.balance});
    // })
    // .catch(err => console.log(err));
  }

  render() {
    return (
    (!this.state.selectedPost)
      ? <div></div>
      : <div className="margin-top">
          Username: {this.state.selectedPost.username} <br />
          category: {this.state.selectedPost.categories}<br />
          Title: {this.state.selectedPost.title} <br />
          Content: {this.state.selectedPost.content} <br />
          <button type="button" id="register-button" onClick={() => this.registerClick()}>Register</button>
        </div>
    )
  }
}

export default withRouter(EachPost);
