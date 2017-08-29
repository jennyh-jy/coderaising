import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  fetch() {
    axios.get('http://localhost:8000/api/getUser/')
    .then(res => {
      this.setState({currentUser: res.data});
    })
    .catch(err => console.log(err));
  }

  depositClick() {
    if (confirm('5000 won will be transferred from your linked credit card. Do you want to proceed?') === true) {
      axios.put('http://localhost:8000/api/deposit')
      .then(res => {
        console.log("5000 won has been deposited into user's account");
        alert('5000 won has been deposited into your account');
        this.fetch();
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
          <h3>Hello {this.state.currentUser.google.name.split(" ")[0]}!</h3><br />
          <img src={this.state.currentUser.google.imageUrl} /><br />
          Name: {this.state.currentUser.google.name} <br />
          Email: {this.state.currentUser.google.email} <br />
          Balance: KRW {this.state.currentUser.balance}
          <button type="button" onClick={() => this.depositClick()}>Make a Deposit</button><br />
          Your credit cards
          <button type="button">Link a credit card</button><br />
          <img
            src="http://www.infomerchant.net/images/creditcards/visalogo-big.gif"
            style={{width: "45px", height:"30px", verticalAlign:"middle"}}
          />Visa #2038
        </div>
    )
  }
}

export default Profile;
