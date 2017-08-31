import React from 'react';
import axios from 'axios';

import isLoggedIn from '../isLoggedIn';


class Newpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentNumber: null,
      currentUsername: null,
      currentUserEmail: null,
      titleValue: null,
      contentValue: null,
      categoryValue: null,
      isTitleTyped: false,
      isContentTyped: false,
    };
  }

  titleChange(event) {
    this.setState({
      titleValue: event.target.value,
      isTitleTyped: true,
    });
  }

  contentChange(event) {
    this.setState({
      contentValue: event.target.value,
      isContentTyped: true,
    });
  }

  categoryChange(event) {
    this.setState({
      categoryValue: event.target.value
    })
  }

  buttonClick() {
    const number = this.state.posts.length + 1;
    axios.get('http://localhost:8000/api/getUser')
    .then(res => {
      this.setState({
        currentNumber: number,
      });
    })
    const newpost = {
      number,
      username: this.state.currentUsername,
      email: this.state.currentUserEmail,
      categories: this.state.categoryValue,
      title: this.state.titleValue,
      content: this.state.contentValue,
    }
    axios.post('http://localhost:8000/api/newpost', newpost)
    .then(response => {
      alert('Your post has been submitted!');
    })
    .then(() => {
      this.props.history.push('/posts');
    })
    .catch(err => console.log(err));
  }

  componentWillMount() {
    if (!isLoggedIn()) {
      alert('You should log in to proceed');
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/posts')
    .then(res => {
      this.setState({posts: res.data});
    })
    .catch(res => console.log('Failed to fetch posts data'));
    axios.get('http://localhost:8000/api/getUser')
    .then(res => {
      this.setState({
        currentUsername: res.data.google.name,
        currentUserEmail: res.data.google.email
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content-padding">
        <div>
        categories: <select onChange={e => this.categoryChange(e)}>
          <option value="--SELECT--">--SELECT--</option>
          <option value="C++">C++</option>
          <option value="JavaScript">JavaScript</option>
        </select>
        </div>
        Title: <input type="text" id="title-input" style={{fontSize: '10pt', width: 430, height: 25}} placeholder="What kind of programming skills do you want to donate?" onChange={e => this.titleChange(e)} /><br />
        Content: <input type="text" id="content-input" style={{fontSize: '10pt', width: 430, height: 200}} placeholder="How do you want to donate your skills? Please be as specific as possible!" onChange={e => this.contentChange(e)} /><br />
        <button type="button" id="submit-button" onClick={() => this.buttonClick()}>Submit</button>
      </div>
    );
  }
};

export default Newpost;
