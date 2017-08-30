import React from 'react';
import axios from 'axios';

import isLoggedIn from '../isLoggedIn';


class NewCharity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: null,
      contentValue: null,
    };
  }

  nameValue(event) {
    this.setState({
      nameValue: event.target.value,
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
    const newcharity = {
      name: this.state.contentValue,
      content: this.state.contentValue,
    }
    axios.post('http://localhost:8000/api/newcharity', newcharity)
    .then(res => {
      alert('Your charity has been submitted!');
    })
    .then(() => {
      this.props.history.push('/Charities');
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

  }

  render() {
    return (
      <div className="margin-top">
        name: <input type="text" id="title-input" style={{fontSize: '10pt', width: 430, height: 25}} placeholder="Name of the charity" onChange={e => this.nameValue(e)} /><br />
        Content: <input type="text" id="content-input" style={{fontSize: '10pt', width: 430, height: 200}} placeholder="Why you want to support this charity" onChange={e => this.contentChange(e)} /><br />
        <button type="button" id="submit-button" onClick={() => this.buttonClick()}>Submit</button>
      </div>
    );
  }
};

export default NewCharity;
