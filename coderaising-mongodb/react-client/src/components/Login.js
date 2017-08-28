import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import axios from 'axios';

class Login extends React.Component{
  constructor (props) {
    super(props);
  }

  // responseGoogle (googleUser) {
  //   const id_token = googleUser.getAuthResponse().id_token;
  //   console.log({accessToken: id_token});
  //   //anything else you want to do(save to localStorage)...
  //
  //   // axios.post('http://localhost:8000/newpost', newpost)
  //   //   .then(response => {
  //   //     console.log('Post has been submitted!');
  //   //     alert('Your post has been submitted!');
  //   //   })
  //   //   .then(() => {
  //   //     this.props.history.push('/posts');
  //   //   })
  //   //   .catch(response => console.log('Failed to post'));
  //   //
  //
  // }
  //
  // onSignIn(googleUser) {
  //   const profile = googleUser.getBasicProfile();
  //   const id_token = googleUser.getAuthResponse().id_token;
  //   console.log(profile);
  //   console.log('ID token: ' + id_token); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }
  //
  // signOut() {
  //   const auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(() => {
  //     console.log('User signed out.');
  //   });
  // }
  //
  // componentDidMount() {
  //   gapi.signin2.render('g-signin2', {
  //     'scope': 'profile email',
  //     'width': 150,
  //     'height': 30,
  //     'longtitle': false,
  //     'theme': 'light',
  //     'onsuccess': this.onSignIn
  //   });
  // }

  render () {
    return (
      <div>
        <a href="/auth/google">Google Sign In</a>
      </div>
    );
  }

}

export default Login;
