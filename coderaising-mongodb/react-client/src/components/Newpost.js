import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Newpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentNumber: null,
      titleValue: null,
      contentValue: null,
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

  buttonClick() {
    const number = this.state.posts.length + 1;
    this.setState({
      currentNumber: number,
      isTitleTyped: false,
      isContentTyped: false,
    });
    const newpost = {
      number,
      username: 'yodoree',
      title: this.state.titleValue,
      content: this.state.contentValue,
    }
    axios.post('http://localhost:8000/api/newpost', newpost)
      .then(response => {
        console.log('Post has been submitted!');
        alert('Your post has been submitted!');
      })
      .then(() => {
        this.props.history.push('/posts');
      })
      .catch(response => console.log('Failed to post'));
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/posts')
    .then(res => {
      this.setState({posts: res.data});
    })
    .catch(res => console.log('Failed to fetch posts data'));
  }

  render() {
    return (
      <div>
        Title: <input type="text" id="title-input" style={{fontSize: '10pt', width: 430, height: 25}} placeholder="What kind of programming skills do you want to donate?" onChange={e => this.titleChange(e)} /><br />
        Content: <input type="text" id="content-input" style={{fontSize: '10pt', width: 430, height: 200}} placeholder="How do you want to donate your skills? Please be as specific as possible!" onChange={e => this.contentChange(e)} /><br />
        <button type="button" id="submit-button" onClick={() => this.buttonClick()}>Submit</button>
      </div>
    );
  }
};

export default withRouter(Newpost);
