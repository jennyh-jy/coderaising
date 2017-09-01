import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

import FooterAbsolute from './FooterAbsolute';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      depositValue: null,
      isdepositTyped: false,
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
      isdepositTyped: true,
    });
  }

  depositClick() {
    if (confirm(`${this.state.depositValue}won will be transferred from your linked credit card. Do you want to proceed?`) === true) {
      axios.put('http://localhost:8000/api/deposit', {deposit: this.state.depositValue})
      .then(res => {
        console.log(`${this.state.depositValue} won has been deposited into user's account`);
        alert(`${this.state.depositValue} won has been deposited into your account`);
        window.location = '/profile'
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
      <div className="content-padding">
          <h3>Hello {this.state.currentUser.google.name.split(" ")[0]}!</h3><br />
          <img src={this.state.currentUser.google.imageUrl} /><br />
          Name: {this.state.currentUser.google.name} <br />
          Email: {this.state.currentUser.google.email} <br />
          meetup: {this.state.currentUser.meetup.map((post, i) =>
                  <div>
                    <Link to={`/posts/${Object.keys(post)[0]}`}>{post[Object.keys(post)[0]]}</Link> <br />
                  </div>
                  )}
          <div>
          Balance: KRW {this.state.currentUser.balance}
          <input type="text" placeholder="얼마충전할래" onChange={e => this.depositChange(e)} /> <button type="button" onClick={() => this.depositClick()}>Make a Deposit</button>
          </div>
          Your credit cards
          <button type="button">Link a credit card</button><br />
          <img
            src="http://www.infomerchant.net/images/creditcards/visalogo-big.gif"
            style={{width: "45px", height:"30px", verticalAlign:"middle"}}
          />Visa #2038
        </div>
        <FooterAbsolute />
        </div>
    )
  }
}

export default Profile;
