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
      registrar: null,
    };
  }

  registerClick() {
    if (confirm("If you register for this session, 1000 won will be deducted from your account. Do you really want to proceed?") === true) {
      axios.get('http://localhost:8000/api/getUser')
      .then(res => {
        this.setState({
          registrar: res.data.google.email
        });
        console.log(this.state.selectedPost.registrar);
        if (res.data.balance >= 1000 && !this.state.selectedPost.registrar.includes(res.data.google.email)) {
          axios.get(`http://localhost:8000/api/posts/${this.props.match.params.number}`)
          .then(res => {
            if (res.data.limit < res.data.selectedlimit) {
              axios.put(`http://localhost:8000/api/post/${this.props.match.params.number}`, {registrar: this.state.registrar})
              .then(res => {
                console.log("selected Post has been updated");
              })
              .catch(err => console.log(err))
              // logged in user balance update
              axios.put('http://localhost:8000/api/loggedInUser', {
                meetupTitle: this.state.selectedPost.title,
                meetupNumber: this.state.selectedPost.number,
                balance : 1000
              })
              .then(res => {
                console.log("logged in user's has been updated");
              })
              .catch(err => console.log('Logged in user balance update error'));
              //post owner balance update
              axios.put('http://localhost:8000/api/postOwnerBalanceUpdate', {username: this.state.selectedPost.username})
              .then(res => {
                alert('You have been registered!');
              })
              .catch(err => console.log('Post owner balance update error'));
              //등록된 selectedPost 업데이트해서 보여줌
              axios.get(`http://localhost:8000/api/posts/${this.props.match.params.number}`)
              .then(res => {
                this.setState({
                  selectedPost: res.data,
                });
              })
              .catch(err => console.log(err));
            } else {
              alert("풀방이야임마");
            }
          })
        } else {
          alert("돈없거나 이미등록햇어임마");
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
      : <div className="content-padding">
          Username: {this.state.selectedPost.username} <br />
          category: {this.state.selectedPost.categories}<br />
          Title: {this.state.selectedPost.title} <br />
          Content: {this.state.selectedPost.content} <br />
          등록된 인원: {this.state.selectedPost.limit} 제한인원: {this.state.selectedPost.selectedlimit}<br />
          <button type="button" id="register-button" onClick={() => this.registerClick()}>Register</button>
        </div>
    )
  }
}

export default withRouter(EachPost);
