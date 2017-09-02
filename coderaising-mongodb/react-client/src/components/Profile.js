import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import { Form, Item, Button, Icon } from 'semantic-ui-react';

import FooterAbsolute from './FooterAbsolute';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      depositValue: null,
    };
  }

  fetch() {
    axios.get('http://localhost:8000/api/getUser/')
    .then(res => {
      this.setState({currentUser: res.data});
    })
    .catch(err => console.log(err));
  }

  depositChange(event) {
    this.setState({
      depositValue: event.target.value,
    });
  }

  depositClick() {
    if (confirm(`${this.state.depositValue}won will be transferred from your linked credit card. Do you want to proceed?`) === true) {
      axios.put('http://localhost:8000/api/deposit', {deposit: this.state.depositValue})
      .then(res => {
        console.log(`${this.state.depositValue} won has been deposited into user's account`);
        alert(`${this.state.depositValue} won has been deposited into your account`);
        this.fetch();
        this.setState({
          depositValue: "",
        });
      })
      .catch(err => console.log(err));
    }
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
    (!this.state.currentUser)
      ? <div></div>
      : <div>
      <div id="content-padding">

      <Item.Group items={[
        {
          image: this.state.currentUser.google.imageUrl,
          header: this.state.currentUser.google.name,
          description:
                this.state.currentUser.meetup.map((post, i) =>
                  <div>
                    <Link to={`/posts/${Object.keys(post)[0]}`}>{post[Object.keys(post)[0]]}</Link> <br />
                  </div>
                ),
          meta: this.state.currentUser.google.email,
          extra: 'Balance: KRW '+ this.state.currentUser.balance,
        }
      ]} />
      <Form.Input value={this.state.depositValue} placeholder='얼마충전할래' onChange={this.depositChange.bind(this)} style={{display : 'inline-block'}}/>

        <Button primary onClick={this.depositClick.bind(this)} style={{display : 'inline-block'}}>
          Make a Deposit
          <Icon name='right chevron' />
        </Button>


        </div>
        <FooterAbsolute />
        </div>
    )
  }
}

export default Profile;

// <h3>Hello {this.state.currentUser.google.name.split(" ")[0]}!</h3><br />

// Your credit cards
// <button type="button">Link a credit card</button><br />
// <img
//   src="http://www.infomerchant.net/images/creditcards/visalogo-big.gif"
//   style={{width: "45px", height:"30px", verticalAlign:"middle"}}
// />Visa #2038
