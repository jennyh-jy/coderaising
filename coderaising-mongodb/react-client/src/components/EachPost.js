import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import axios from 'axios';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';


import FooterAbsolute from './FooterAbsolute';
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

              this.props.history.push('/posts');
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
      : <div>
        <div id="content-padding">

        <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Header>{this.state.selectedPost.title}</Item.Header>
                <Item.Meta>
                  <span>제한인원 : {this.state.selectedPost.limit}/{this.state.selectedPost.selectedlimit}명</span>
                </Item.Meta>
                <Item.Description>
                {this.state.selectedPost.content}</Item.Description>
                <Item.Extra>
                  <Button primary floated='right' onClick={this.registerClick.bind(this)}>
                    Register
                    <Icon name='right chevron' />
                  </Button>
                  <Label>{this.state.selectedPost.categories}</Label>
                  Posted by {this.state.selectedPost.username}
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
        <FooterAbsolute />
        </div>
    )
  }
}

export default withRouter(EachPost);
