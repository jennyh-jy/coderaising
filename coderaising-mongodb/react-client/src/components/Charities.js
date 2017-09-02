import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Confirm, List, Progress } from 'semantic-ui-react';

import FooterStatic from './FooterStatic';
import isLoggedIn from '../isLoggedIn';

const DONATION_GOAL = 100000;

class Charities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: [],
      selectedCharityName: null,
      donationValue: null,
      donationInputField: '',
      isDonationTyped: false
    };
  }

  fetch() {
    axios.get('http://localhost:8000/api/charities')
    .then(res => {
      this.setState({charities: res.data});
    })
    .catch(err => console.log(err));
  }

  donationChange(event) {
    this.setState({
      donationValue: event.target.value,
      isDonationTyped: true,
    });
  }

  donateClick(event) {
    if (!isLoggedIn()) {
      alert('You should log in to proceed');
      this.props.history.push('/login');
    } else if (confirm(`기부하면 ${this.state.donationValue}원이 차감됩니다. 정말 기부할래?`) === true) {
      this.setState({selectedCharityName: event.target.className});
      axios.get('http://localhost:8000/api/getUser')
      .then(res => {
        if (res.data.balance >= this.state.donationValue) {
          //logged in user balance update
          axios.put('http://localhost:8000/api/loggedInUser', {balance: this.state.donationValue})
          .then(res => {
            console.log("logged in user's balance has been updated");
          })
          .catch(err => console.log('Logged in user balance update error'));
          //charity balance update
          axios.put(`http://localhost:8000/api/charity/${this.state.selectedCharityName}`, {balance: this.state.donationValue})
          .then(res => {
            alert('기부되었습니다! ㄱㅅㄱㅅ');
            this.fetch();
            window.location = '/charities';
          })
          .catch(err => console.log(err));
        } else {
          alert("돈없다 충전해라");
        }
      })
    }
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
    <div>
      <div id="picture-container">
        <span className="main-statement-others">
          Charities you can support
        </span>
        <a href="#" className="new-btn"><Link to="/newcharity">Register a Charity</Link></a>
      <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/pexels-photo-339620.jpg" className="background-img" />
      <div className="img-tint-others"></div>
      </div>
       <div id="content-padding">

       <List divided relaxed>

       {this.state.charities.map((charity, i) =>
         <List.Item>
           <List.Icon name='github' size='large' verticalAlign='middle' />
           <List.Content>
             <List.Header as='a'>{charity.name}</List.Header>
             <List.Description as='a'>기부된 금액 {charity.balance}원</List.Description>
             <input type="text" placeholder="얼마낼래" onChange={e => this.donationChange(e)} />
             <button type="button" className={charity.name} onClick={this.donateClick.bind(this)}>Donate</button>
           </List.Content>
           {(charity.balance / DONATION_GOAL * 100) >= 100
             ? <Progress percent={100} success>{charity.name} has reached their donation goal!</Progress>
             : <Progress percent={charity.balance / DONATION_GOAL * 100} progress color='yellow' />}

         </List.Item>
       )}
         </List>

        </div>
        <FooterStatic />
      </div>
    );
  }
}

export default Charities;
