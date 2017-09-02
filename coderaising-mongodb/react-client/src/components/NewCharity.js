import React from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react'

import FooterAbsolute from './FooterAbsolute';
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
      name: this.state.nameValue,
      content: this.state.contentValue,
    }
    axios.post('http://localhost:8000/api/newcharity', newcharity)
    .then(res => {
      alert('Your charity has been submitted!');
    })
    .then(() => {
      this.props.history.push('/charities');
    })
    .catch(err => console.log(err));
  }

  componentWillMount() {
    if (!isLoggedIn()) {
      alert('You should log in to proceed');
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div>
        <div id="content-padding">
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Name' placeholder='Name of the charity' onChange={this.nameValue.bind(this)} />
          </Form.Group>
          <Form.TextArea label='Content' placeholder='Why you want to support this charity?' onChange={this.contentChange.bind(this)}/>
          <Form.Button onClick={this.buttonClick.bind(this)}>Submit</Form.Button>
        </Form>

        </div>
        <FooterAbsolute />
      </div>
    );
  }
};

export default NewCharity;
