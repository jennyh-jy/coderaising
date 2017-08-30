import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import isLoggedIn from '../isLoggedIn';


class Charities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: [],
      selectedCharity: null,
    };
  }

  fetch() {
    axios.get('http://localhost:8000/api/charities')
    .then(res => {
      this.setState({charities: res.data});
    })
    .catch(err => console.log(err));
  }

  donateClick(event) {
    if (!isLoggedIn()) {
      alert('You should log in to proceed');
      this.props.history.push('/login');
    } else if (confirm("기부하면 1000원이 차감됩니다. 정말 기부할래?") === true) {
      this.setState({selectedCharity: event.target.className});
      axios.get('http://localhost:8000/api/getUser')
      .then(res => {
        if (res.data.balance >= 1000) {
          //logged in user balance update
          axios.put('http://localhost:8000/api/updateUserBalance')
          .then(res => {
            console.log("logged in user's balance has been updated");
          })
          .catch(err => console.log('Logged in user balance update error'));
          //charity balance update
          axios.put('http://localhost:8000/api/updateCharityBalance', {name: this.state.selectedCharity})
          .then(res => {
            alert('기부되었습니다! ㄱㅅㄱㅅ');
            this.fetch(); // Charity balance 화면에서 바로 올라가게
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
      <div className="margin-top">
      <h1>Charities</h1>
        {this.state.charities.map((charity, i) =>
          <div>
          {charity.name}  {charity.balance}원  <button type="button" className={charity.name} onClick={this.donateClick.bind(this)}>Donate</button>
          </div>
        )}
      </div>
    );
  }
}

export default Charities;
