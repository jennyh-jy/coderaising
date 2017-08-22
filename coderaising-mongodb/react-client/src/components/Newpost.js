import React from 'react';
import axios from 'axios';

class Newpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentNumber: null,
      titleValue: null,
      contentValue: null,
    };
  }

  fetch() {
    axios.get('http://localhost:8000/posts')
    .then(res => {
      this.setState({posts: res.data});
    })
    .catch(res => console.log('Failed to update posts data'));
  }

  titleChange(event) {
    this.setState({ titleValue: event.target.value });
  }

  contentChange(event) {
    this.setState({ contentValue: event.target.value });
  }

  buttonClick(event) {
    const number = this.state.posts.length + 1;
    this.setState({ currentNumber: number });
    const newpost = {
      number,
      username: 'yodoree',
      title: this.state.titleValue,
      content: this.state.contentValue,
    }
    axios.post('http://localhost:8000/newpost', newpost)
      .then(response => {
        console.log('Post has been submitted!');
        alert('Your post has been submitted!');
        this.fetch();
      })
      .catch(response => console.log('Failed to post'));
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div>
        Title: <input type="text" id="title-input" onChange={this.titleChange.bind(this)} /><br />
        Content: <input type="text" id="content-input" onChange={this.contentChange.bind(this)} /><br />
        <button type="button" id="submit-button" onClick={this.buttonClick.bind(this)}>Submit</button>
      </div>
    );
  }
};

export default Newpost;
